import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper"; // Import TextInput from Material UI
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const [licenseCategory, setLicenseCategory] = useState("");
  const [licenseExpiry, setLicenseExpiry] = useState("");
  const [image, setImage] = useState(null); // State for holding the selected image URI

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri); // Set the selected image URI to the state
    }
  };

  return (
    <View style={styles.container}>
      {/* Display selected image if available */}
      {image && <Image source={{ uri: image }} style={styles.profileImage} />}

      {/* Button to select image */}
      <TouchableOpacity onPress={selectImage}>
        <Text style={styles.selectImageButton}>Select Image</Text>
      </TouchableOpacity>

      {/* Name input */}
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "#94A3B8" } }}
      />

      {/* Email input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "#94A3B8" } }}
      />

      {/* Driving information */}
      <Text style={styles.drivingInfoText}>Driving Information</Text>

      {/* Driver License input */}
      <TextInput
        label="Driver License"
        value={driverLicense}
        onChangeText={setDriverLicense}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "#94A3B8" } }}
      />

      {/* License Category input */}
      <TextInput
        label="License Category"
        value={licenseCategory}
        onChangeText={setLicenseCategory}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "#94A3B8" } }}
      />

      {/* License Expiry input */}
      <TextInput
        label="License Expiry"
        value={licenseExpiry}
        onChangeText={setLicenseExpiry}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "#94A3B8" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#94A3B8",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make image round
    marginBottom: 20,
  },
  selectImageButton: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  drivingInfoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#94A3B8",
  },
});

export default ProfileScreen;
