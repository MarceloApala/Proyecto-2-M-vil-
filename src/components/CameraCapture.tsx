import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function CameraCapture() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  async function capturePhoto() {
    if (cameraRef.current) {
      try {
        const photoData = await cameraRef.current.takePictureAsync();
        setPhoto(photoData.uri);
      } catch (error) {
        console.error("Error capturing photo:", error);
      }
    }
  }
  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back" 
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={capturePhoto}>
            <Text style={styles.text}>Capture Photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    backgroundColor: "black",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  photo: {
    flex: 1,
    resizeMode: "contain",
    margin: 20,
  },
});
