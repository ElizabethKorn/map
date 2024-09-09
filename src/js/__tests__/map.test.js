import ErrorRepository from "../map";

test("should return correct error message for known code", () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(400)).toBe("Bad Request");
  expect(errorRepo.translate(401)).toBe("Unauthorized");
  expect(errorRepo.translate(402)).toBe("Payment Required");
  expect(errorRepo.translate(403)).toBe("Forbidden");
  expect(errorRepo.translate(404)).toBe("Not Found");
});

test('should return "Unknown error" for unknown code', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(999)).toBe("Unknown error");
  expect(errorRepo.translate(-1)).toBe("Unknown error");
  expect(errorRepo.translate(0)).toBe("Unknown error");
});
