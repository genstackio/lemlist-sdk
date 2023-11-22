export class JsonSerializableError extends Error {
    protected rawData: any;
    constructor(data) {
        super(data?.message || 'Unexpected error');
        this.rawData = data || {};
    }
    getRawData() {
        return this.rawData;
    }
    toJson() {
        return { message: this.message, ...this.rawData };
    }
}

export default JsonSerializableError;
