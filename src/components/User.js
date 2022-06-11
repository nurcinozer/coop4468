import React from "react";
import { Box, Stack, Heading, Text } from "native-base";
const User = (props) => {
  return (
    <Box alignItems="center" marginY={2}>
      <Box
        maxW={96}
        width="full"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              User Name
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.user.name}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
    // <ScrollView>
    //   <Text
    //     style={{
    //       backgroundColor: "#FFADA6",
    //       margin: 10,
    //       padding: 20,
    //       borderRadius: 10,
    //       overflow: "hidden",
    //       color: "#FF4B3A",
    //       fontWeight: "bold"
    //     }}
    //   >
    //     {props.user.name}
    //   </Text>
    // </ScrollView>
  );
};

export default User;
