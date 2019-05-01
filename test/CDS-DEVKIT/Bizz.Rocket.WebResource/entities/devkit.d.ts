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



        interface LookupValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface CustomerValue {
            /** The object value of field*/
            Value: string;
            /** The string formatted value of field*/
            FormattedValue: string;
        }
        interface OwnerUserValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface OwnerTeamValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface OwnerStringValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface BooleanValue {
            /** The object value of field */
            Value: boolean;
            /** The string formatted value of field */
            FormattedValue: string;
        }





        interface IntegerValue {
            /** The object value of field */
            Value: number;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface BigIntValue {
            /** The object value of field */
            Value: number;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface DecimalValue {
            /** The object value of field */
            Value: number;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface DoubleValue {
            /** The object value of field */
            Value: number;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface MoneyValue {
            /** The object value of field */
            Value: number;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface GuidValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface EntityCollectionValue {
            /** The object value of field */
            Value: Array<object>;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface VirtualValue {
            /** The object value of field */
            Value: object;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface ManagedPropertyValue {
            /** The object value of field */
            Value: object;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface StringValue {
            /** The object value of field */
            Value: string;
            /** The string formatted value of field */
            FormattedValue: string;
        }

        interface AlternateKey {
            property: string;
            value: object;
        }
        interface Header {
            key: string;
            value: string;
        }

        class RetrieveRequest {
            constructor();
            /** The entity name. */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** The entity Guid Id */
            entityId: string;
            /** The array of alternate key */
            alternateKey: Array<AlternateKey>;
            /** The ODATA query parameters */
            queryParams: string;
            /** The FetchXml string */
            fetchXml: string;
            /** Default false, if true return all records of all pages */
            returnAllPages: boolean;
            /** Default true, requests are sent asynchronously */
            async: boolean;
            /** Default { key: 'Prefer', value: 'odata.include-annotations='*'' }, request header */
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
    }
}

declare namespace WebApiClient {
    function Retrieve(request: Rocket.WebApi.RetrieveRequest): Rocket.WebApi.RetrieveResponse;
}