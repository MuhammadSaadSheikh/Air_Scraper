import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icons from '../assets/Icons';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  disabled?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onChange,
  disabled,
  maxStars = 5,
}) => {
  const numberOfStars = new Array(maxStars).fill(0);
  return (
    <View style={{ flexDirection: 'row' }}>
      {numberOfStars.map((_, index) => {
        const isFilled = index < rating;
        return (
          <TouchableOpacity
            key={index}
            disabled={disabled}
            onPress={() => onChange && onChange(index + 1)}
          >
            <Image
              source={isFilled ? Icons.star : Icons.star}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StarRating;
