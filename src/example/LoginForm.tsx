import { Box, Button, Input, Stack, Text } from "@/components";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text as="h2" weight="bold" align="center" size="xxxl" className="mb-2">
          Login
        </Text>
        <Text
          as="span"
          emphasis="low"
          align="center"
          size="small"
          className="mb-8"
        >
          Please enter your credentials
        </Text>

        <Text
          as="label"
          htmlFor="username"
          weight="medium"
          size="small"
          className="mb-1.5"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="username"
          className="mb-4"
        />

        <Text
          as="label"
          htmlFor="password"
          weight="medium"
          size="small"
          className="mb-1.5"
        >
          Password
        </Text>
        <Input
          type="text"
          id="password"
          placeholder="password"
          className="mb-4"
        />

        <Button type="submit" variant="solid" className="mb-4">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
