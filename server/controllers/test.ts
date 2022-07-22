import type { Request, Response } from "express";
import type { Test } from "../types/test";

export const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const getTest = async (
  request: Request,
  response: Response
): Promise<Response<Test>> => {
  const responseBody: Test = { a: 1 };

  await wait(500);

  return response.json(responseBody);
};

export const testController = {
  getTest,
};
