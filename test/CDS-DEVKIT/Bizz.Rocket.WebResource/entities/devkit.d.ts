declare namespace Rocket {
    module WebApi {
        type Guid = object
        type DateOnly = string;
        type DateAndTime = string;
        interface OptionSetValue {
            /** The string value of integer type. Use parseInt(...) to get the integer */
            Value: number;
            /** The string formatted value */
            FormattedValue: string;
        }
        interface MultiOptionSetValue {
            /** The array string of integer type. Use parseInt(...) to get the integer for each item */
            Value: Array<number>;
            /** The array string formatted value */
            FormattedValue: Array<string>;
        }
        interface LookupValue {
            /** The object value of field */
            Value: Guid;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface CustomerValue {
            /** The object value of field*/
            Value: Guid;
            /** The string formatted value of field*/
            FormattedValue: string;
        }
        interface OwnerUserValue {
            /** The object value of field */
            Value: Guid;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface OwnerTeamValue {
            /** The object value of field */
            Value: Guid;
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
        interface DateOnlyValue {
            /** The object value of field */
            Value: DateOnly;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface TimezoneDateOnlyValue {
            /** The object value of field */
            Value: DateOnly;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface TimezoneDateAndTimeValue {
            /** The object value of field */
            Value: DateAndTime;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface UtcDateOnlyValue {
            /** The object value of field */
            Value: DateOnly;
            /** The string formatted value of field */
            FormattedValue: string;
        }
        interface UtcDateAndTimeValue {
            /** The object value of field */
            Value: DateAndTime;
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
            Value: Guid;
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

        /**  Return an object WebApiClient.RetrieveRequest */
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
    }
}