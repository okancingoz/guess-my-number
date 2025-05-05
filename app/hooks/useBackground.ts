import { useEffect, useRef } from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const useBackgroundMusic = () => {
  const soundRef = useRef<Sound | null>(null);

  useEffect(() => {
    const playMusic = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../assets/audio/background.mp3"),
          {
            isLooping: true,
            volume: 0.02,
          }
        );
        soundRef.current = sound;
        await sound.playAsync();
      } catch (error) {
        console.warn("Background music error:", error);
      }
    };

    playMusic();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);
};

export default useBackgroundMusic;
