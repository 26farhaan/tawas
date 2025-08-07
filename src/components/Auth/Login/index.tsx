"use client";

import { useRouter } from "next/navigation";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { AxiosError, AxiosResponse } from "axios";
import { zodResolver } from "mantine-form-zod-resolver";

import ENDPOINTS from "@/constants/endpoints";
// import { setCookie } from "@/libs/auth-actions";
import apiService from "@/libs/axios";
import promiseWrapper from "@/utils/promiseWrapper";
import classes from "./index.module.css";
import { loginSchema } from "./schema";

export function LoginForm() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validate: zodResolver(loginSchema()),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const [response, errorLogin] = await promiseWrapper<
      AxiosResponse,
      AxiosError<{ code: string; detail: Array<{ detail: string }> & string }>
    >(apiService.post(ENDPOINTS.LOGIN, values));

    if (errorLogin) {
      const errors = errorLogin?.response?.data?.detail;
      if (Array.isArray(errors)) {
        errorLogin?.response?.data?.detail?.forEach(({ detail }) => {
          notifications.show({
            color: "red",
            title: "Oops!",
            message: detail || "Terjadi kesalahan, cobalah beberapa saat lagi.",
          });
        });
        return;
      }
      notifications.show({
        color: "red",
        title: "Oops!",
        message: errors || "Terjadi kesalahan, cobalah beberapa saat lagi.",
      });
      return;
    }

    console.log(response);

    const [
      [resProfile, errProfile],
      // [
      //   resPermissions,
      //   errPermissions
      // ]
    ] = await Promise.all([
      promiseWrapper(apiService.get(ENDPOINTS.GET_ME)),
      // promiseWrapper(apiService.get<ResponseData<string[]>>(ENDPOINTS.GET_AUTH_PERMISSIONS)),
    ]);

    if (
      errProfile
      // || errPermissions
    ) {
      notifications.show({
        color: "red",
        title: "Oops!",
        message: "Terjadi kesalahan, cobalah beberapa saat lagi.",
      });
      // logout(); // Clear cookies or session storage if needed
      return;
    }

    if (
      !!resProfile
      // && !!resPermissions
    ) {
      await router.push("/test");
    }
  });

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <form onSubmit={handleSubmit}>
        <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="you@mantine.dev"
            required
            radius="md"
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            radius="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox {...form.getInputProps("remember_me")} label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" radius="md" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
