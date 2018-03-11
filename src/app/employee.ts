export class Employee {
    constructor(
        // public firstName = '',
        // public lastName = '',
        // public email = '',
        // public sendCatalog = false,
        // public addressType = 'home',
        // public street1?: string,
        // public street2?: string,
        // public city?: string,
        // public state = '',
        // public zip?: string) { }

        public employeeNo = '',
        public employeeName = '',
        public email = '',
        public employeeType = '',
        public employeeWO = '',
        public fromDate?: Date,
        public toDate?: Date,
        public noOfDays?: number,
        public billableHours?: number,
        public ninthHours?: number) { }
}
