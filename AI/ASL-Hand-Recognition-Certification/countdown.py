import cv2
from mediapipe import solutions
from mediapipe.framework.formats import landmark_pb2
import numpy as np
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
import joblib
import time


# Load the pre-trained Random Forest model
model_path = 'Random_forest_without_scaling.pkl'
rf_classifier = joblib.load(model_path)

base_options = python.BaseOptions(model_asset_path='hand_landmarker.task')
options = vision.HandLandmarkerOptions(base_options=base_options,
                                       num_hands=1)
detector = vision.HandLandmarker.create_from_options(options)

MARGIN = 10  # pixels
FONT_SIZE = 1
FONT_THICKNESS = 1
HANDEDNESS_TEXT_COLOR = (88, 205, 54)  # vibrant green
PREDICTED_LABEL_COLOR = (0, 0, 255)  # red color for predicted label
COUNTDOWN_COLOR = (255, 0, 0)  # blue color for countdown

# Initialize variables for holding gesture detection
last_predicted_label = None
gesture_start_time = None
hold_duration = 5  # seconds

def draw_landmarks_on_image(rgb_image, detection_result, predicted_label, countdown_text=None):
    hand_landmarks_list = detection_result.hand_landmarks
    handedness_list = detection_result.handedness
    annotated_image = np.copy(rgb_image)

    # Loop through the detected hands to visualize.
    for idx in range(len(hand_landmarks_list)):
        hand_landmarks = hand_landmarks_list[idx]
        handedness = handedness_list[idx]

        # Draw the hand landmarks.
        hand_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
        hand_landmarks_proto.landmark.extend([
            landmark_pb2.NormalizedLandmark(x=landmark.x, y=landmark.y, z=landmark.z) for landmark in hand_landmarks
        ])
        solutions.drawing_utils.draw_landmarks(
            annotated_image,
            hand_landmarks_proto,
            solutions.hands.HAND_CONNECTIONS,
            solutions.drawing_styles.get_default_hand_landmarks_style(),
            solutions.drawing_styles.get_default_hand_connections_style())

        # Get the top left corner of the detected hand's bounding box.
        height, width, _ = annotated_image.shape
        x_coordinates = [landmark.x for landmark in hand_landmarks]
        y_coordinates = [landmark.y for landmark in hand_landmarks]
        text_x = int(min(x_coordinates) * width)
        text_y = int(min(y_coordinates) * height) - MARGIN

        # Draw handedness (left or right hand) on the image.
        cv2.putText(annotated_image, f"{handedness[0].category_name}",
                    (text_x, text_y), cv2.FONT_HERSHEY_DUPLEX,
                    FONT_SIZE, HANDEDNESS_TEXT_COLOR, FONT_THICKNESS, cv2.LINE_AA)

        # Draw the predicted label below the handedness text
        cv2.putText(annotated_image, f"Predicted: {predicted_label}",
                    (text_x, text_y + 30), cv2.FONT_HERSHEY_DUPLEX,
                    FONT_SIZE, PREDICTED_LABEL_COLOR, FONT_THICKNESS, cv2.LINE_AA)
        
        # Draw countdown timer if applicable
        if countdown_text:
            cv2.putText(annotated_image, countdown_text,
                        (text_x, text_y + 60), cv2.FONT_HERSHEY_DUPLEX,
                        FONT_SIZE, COUNTDOWN_COLOR, FONT_THICKNESS, cv2.LINE_AA)

    return annotated_image


# Open the camera
cap = cv2.VideoCapture(1)

if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # If frame is read correctly, ret is True
    if not ret:
        print("Error: Could not read frame.")
        break

    # Convert the BGR image to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Create an Image object for MediaPipe
    mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_frame)

    # Perform hand detection
    detection_result = detector.detect(mp_image)

    # Check if any hand landmarks were detected
    hand_landmarks_list = detection_result.hand_landmarks
    if hand_landmarks_list:
        data = []
        for i in range(len(hand_landmarks_list[0])):
            landmark = hand_landmarks_list[0][i]
            data.extend([landmark.x, landmark.y, landmark.z])
        data = np.array(data).reshape(1, -1)
        # Predict the label using the loaded Random Forest model
        predicted_label = rf_classifier.predict(data)[0]

        # Initialize or check the gesture hold timer
        if predicted_label == last_predicted_label:
            if gesture_start_time is None:
                gesture_start_time = time.time()
            elapsed_time = time.time() - gesture_start_time
            if elapsed_time >= hold_duration:
                countdown_text = "Hold: Complete"
            else:
                remaining_time = hold_duration - elapsed_time
                countdown_text = f"Hold: {int(remaining_time)}s"
        else:
            last_predicted_label = predicted_label
            gesture_start_time = None
            countdown_text = None

        # Annotate the image with landmarks, predicted label, and countdown
        annotated_image = draw_landmarks_on_image(rgb_frame, detection_result, predicted_label, countdown_text)

        # Convert the annotated image back to BGR for displaying with OpenCV
        bgr_annotated_image = cv2.cvtColor(annotated_image, cv2.COLOR_RGB2BGR)

        # Display the resulting frame
        cv2.imshow('Camera Feed', bgr_annotated_image)

    # Press 'q' to quit the camera feed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()
