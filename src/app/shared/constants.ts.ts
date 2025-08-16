export class Constants {
}

export class ApiResponse {
    statusCode: number;
    statusMessage: string;
    data: any;

    constructor(statusCode: number, statusMessage: string, data?: any) {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.data = data || null;
    }
}
