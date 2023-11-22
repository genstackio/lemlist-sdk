import JsonSerializableError from './JsonSerializableError';

export class SdkError extends JsonSerializableError {
    public code: number;
    public detail: string | undefined;
    public errorType: string;
    public status: string;
    public statusCode: number;
    public data: any;
    constructor(data, statusCode = 500) {
        super(data);
        this.code = this.getRawData()['code'] || 1;
        this.detail = this.getRawData()['detail'] || undefined;
        this.errorType = this.getRawData()['errorType'] || 'unknown';
        this.status = this.getRawData()['status'] || 'status';
        this.statusCode = statusCode;
        this.data = this.getRawData()['data'] || {};
    }
    getMessage() {
        return this.message;
    }
    getDetail() {
        return this.detail;
    }
    getErrorType() {
        return this.errorType;
    }
    getCode() {
        return this.code;
    }
    getStatusCode() {
        return this.statusCode;
    }
    getStatus() {
        return this.status;
    }
    toJson() {
        return {
            status: this.status,
            statusCode: this.statusCode,
            message: this.message,
            code: this.code,
            detail: this.detail,
            errorType: this.errorType,
            data: this.data,
        };
    }
}

export default SdkError;
