export class ErrorDto {
  constructor(private status: number, private message: string, private error: string) {}
}
