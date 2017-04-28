export class StringUtil extends String {

    public static isNullorWhiteSpace(stringValue: string): boolean {
        if (this.isNullorEmpty(stringValue)) {
            return true;
        }
        return stringValue.replace(/\s/gi, '').length < 1;
    }

    public static isNullorEmpty(stringValue: string): boolean {
        if (stringValue === null || stringValue === undefined) {
            return true;
        } else {
            return false;
        }
    }
}
