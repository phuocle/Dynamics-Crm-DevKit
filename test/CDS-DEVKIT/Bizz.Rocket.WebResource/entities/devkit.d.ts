declare namespace Rocket {
    module WebApi {
        interface OptionSetValue {
            /** The optionset item value - integer type */
            Value: number;
            /** The optionset label text - string type */
            FormattedValue: string;
        }
        interface MultiOptionSetValue {
            /** The array optionset item value - array of integer type */
            Value: Array<number>;
            /** The array optionset label text - array of string type */
            FormattedValue: Array<string>;
        }
        interface BooleanValue {
            /** The bool value of field. E.g.: true */
            Value: boolean;
            /** The label text of field. E.g.: "Yes" */
            FormattedValue: string;
        }
        interface DateOnlyValue {
            /** The date only value of field. Always format yyyy-MM-dd */
            Value: string;
            /** The date only string formatted of field base on user setting format */
            FormattedValue: string;
        }
        interface UtcDateOnlyValue {
            /** The UTC date only value of field. E.g.: "2019-04-29T17:00:00Z" */
            Value: string;
            /** The UTC date only string formatted of field. E.g.: "30.04.2019" */
            FormattedValue: string;
        }
        interface UtcDateAndTimeValue {
            /** The UTC date and time value of field. E.g.: "2019-04-27T07:30:00Z" */
            Value: string;
            /** The UTC date and time string formatted of field. E.g.: "27.04.2019 02:30 CH" */
            FormattedValue: string;
        }
        interface TimezoneDateOnlyValue {
            /** The time-zone date only value of field. E.g.: "2019-04-26T00:00:00Z" */
            Value: string;
            /** The time-zone date string formatted of field. E.g.: "26.04.2019" */
            FormattedValue: string;
        }
        interface TimezoneDateAndTimeValue {
            /** The time-zone date and time value of field. E.g.: "2019-04-28T15:30:00Z" */
            Value: string;
            /** The time-zone date and time string formatted of field. E.g.: "28.04.2019 03:30 CH" */
            FormattedValue: string;
        }
        interface IntegerValue {
            /** The integer value of field. E.g.: 1234567 */
            Value: number;
            /** The string formatted value of field. E.g.: "1.234.567" */
            FormattedValue: string;
        }
        interface BigIntValue {
            /** The big integer value of field. E.g.: 1234567 */
            Value: number;
            /** The string formatted value of field. E.g.: "1.234.567" */
            FormattedValue: string;
        }
        interface DoubleValue {
            /** The double value of field. E.g.: 1234.57 */
            Value: number;
            /** The string formatted value of field. E.g.: "1.234,57" */
            FormattedValue: string;
        }
        interface DecimalValue {
            /** The decimal value of field. E.g.: 1234567.89 */
            Value: number;
            /** The string formatted value of field. E.g.: "1.234.567,89" */
            FormattedValue: string;
        }
        interface MoneyValue {
            /** The currency value of field. E.g.: 123456.35 */
            Value: number;
            /** The string formatted value of field. E.g.: "123.456,35 $" */
            FormattedValue: string;
        }
        interface StringValue {
            /** The string value of field */
            Value: string;
        }
        interface LookupValue {
            /** The Guid value of field. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
            /** The string formatted value of field. E.g.: "A. Datum Corporation (sample)" */
            FormattedValue: string;
        }
        interface GuidValue {
            /** The Guid value of field. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
        }
        class EntityReference {
            constructor();
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** The entity name */
            entityName: string;
            /** The entity Guid Id */
            entityId: string;
        }
        class AlternateKey {
            /**
             * Return a alternate key object { property, value }
             * @param property the alternate logical name
             * @param value the value query
             */
            constructor(property: string, value: object);
        }
        class Header {
            /**
             * Retrun a header object { key, value }
             * @param key the header key
             * @param value the header value
             */
            constructor(key: string, value: string);
        }
        class RetrieveRequest {
            constructor();
            /** Entity name of records that should be retrieved */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** ID of entity to retrieve, will return single record */
            entityId: string;
            /** Alternate key array for retrieving single record */
            alternateKey: Array<AlternateKey>;
            /** Query Parameters to append to URL, such as ?$select=* */
            queryParams: string;
            /** Fetch XML query */
            fetchXml: string;
            /** Default false, checks for more pages when retrieving results. If set to true, all pages will be retrieved, if set to false, only the first page will be retrieved */
            returnAllPages: boolean;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class RetrieveResponse {
            constructor();
            "@odata.context": string;
            /** Use the value of the @odata.nextLink property to request the next set of records. Don’t change or append any additional system query options to the value */
            "@odata.nextLink": string;
            "@odata.count": number;
            /** A paging cookie must be requested as an annotation. And a @Microsoft.Dynamics.CRM.fetchxmlpagingcookie property will be returned with the result */
            "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": string;
            "@Microsoft.Dynamics.CRM.morerecords": boolean;
            /** When you set returntotalrecordcount="true" in FetchXml, this value return the count */
            "@Microsoft.Dynamics.CRM.totalrecordcount": number;
            "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": boolean;
            /** An array object of ODATA value*/
            value: Array<object>;
        }
        class CreateRequest {
            constructor();
            /** Entity name of record that should be created */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** Object containing record data */
            entity: object;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class DeleteRequest {
            constructor();
            /** Entity name of records that should be deleted */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** ID of entity to delete */
            entityId: string;
            /** Alternate key array for deleting record */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class UpdateRequest {
            constructor();
            /** Entity name of records that should be updated */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** Object containing record data */
            entity: object;
            /** ID of entity to update */
            entityId: string;
            /** Alternate key array for updating record */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class WithRequest {
            constructor();
            /** The HTTP method of the request, such as GET / POST / ... */
            method: string;
            /** The name of the request */
            name: string;
            /** Determines if request is bound, i.e. always executed regarding a distinct record, or not. Defaults to false */
            bound: boolean;
            /** Name of the request if it is bound to an entity */
            entityName: string;
            /** Record ID if bound to an entity */
            entityId: string;
            /** Message body for this request */
            payload: object;
            /** Object with key-value pairs that will be appended to the URL of a GET request. Used for calling functions with parameters */
            urlParams: string;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class CustomRequest {
            constructor();
            /** The HTTP method of the request, such as GET / POST / ... */
            method: string;
            /** The name of the request */
            name: string;
            /** Determines if request is bound, i.e. always executed regarding a distinct record, or not. Defaults to false */
            bound: boolean;
            /** Name of the request if it is bound to an entity */
            entityName: string;
            /** Record ID if bound to an entity */
            entityId: string;
            /** Message body for this request */
            payload: object;
            /** Object with key-value pairs that will be appended to the URL of a GET request. Used for calling functions with parameters */
            urlParams: string;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class AssociateRequest {
            constructor();
            /** Name of relation ship to use for associating */
            relationShip: string;
            /** Source entity for associating */
            source: EntityReference;
            /** Target entity for associating */
            target: EntityReference;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class DisassociateRequest {
            constructor();
            /** Name of relation ship to use for disassociating */
            relationShip: string;
            /** Source entity for disassociating */
            source: EntityReference;
            /** Target entity for disassociating */
            target: EntityReference;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
    }
}

/** A promise-based JavaScript library for the Microsoft Dynamics CRM WebApi. Github: https://github.com/DigitalFlow/Xrm-WebApi-Client */
declare namespace WebApiClient {
    /**
     * Retrieves records from CRM
     * @param request the RetrieveRequest object
     */
    function Retrieve(request: Rocket.WebApi.RetrieveRequest): Rocket.WebApi.RetrieveResponse;
    /**
     * Creates a given record in CRM
     * @param request the CreateRequest object
     */
    function Create(request: Rocket.WebApi.CreateRequest): object;
    /**
     * Updates a given record in CRM
     * @param request the UpdateRequest object
     */
    function Update(request: Rocket.WebApi.UpdateRequest): object;
    /**
     * Deletes a given record in CRM
     * @param request the DeleteRequest object
     */
    function Delete(request: Rocket.WebApi.DeleteRequest): object;
    /**
     * Associates given records in CRM
     * @param request the AssociateRequest object
     */
    function Associate(request: Rocket.WebApi.AssociateRequest): object;
    /**
     * Disassociates given records in CRM
     * @param request the DisassociateRequest object
     */
    function Disassociate(request: Rocket.WebApi.DisassociateRequest): object;
    /**
     * Executes the given request in CRM
     * @param request Request to send, must be in prototype chain of WebApiClient.Requests.Request
     */
    function Execute(request: object): object;
}