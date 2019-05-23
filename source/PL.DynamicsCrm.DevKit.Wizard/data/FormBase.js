    class Form{0} extends DevKit.Form.IForm {
        /**
         * PL.DynamicsCrm.DevKit form {0}
         * @param executionContext the execution context.
         * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource".
         */
        constructor(executionContext: any, defaultWebResourceName?: string);
        /** Utility functions/methods/objects for Dynamics 365 form */
        Utility: DevKit.Form.Utility;
        /** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
        WebApi: DevKit.Form.WebApi;
        /** The Body section of form {0} */
        Body: {1}.Form{0}.Body;
        /** The Footer section of form {0} */
        Footer: {1}.Form{0}.Footer;
        /** The Header section of form {0} */
        Header: {1}.Form{0}.Header;
        /** The Navigation of form {0} */
        Navigation: {1}.Form{0}.Navigation;
        /** The QuickForm of form {0} */
        QuickForm: {1}.Form{0}.QuickForm;
        ///** The Composite of form {0} */
        //Composite: {1}.Form{0}.Composite;
        /** The Process of form {0} */
        Process: {1}.Form{0}.Process;
    }
