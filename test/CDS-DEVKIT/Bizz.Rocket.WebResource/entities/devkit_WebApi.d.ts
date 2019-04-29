///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface devkit_WebApiOptionSet {
		devkit_MultiOptionSetCode: {
			/** 100000000 */
			Crm_4: number,
			/** 100000001 */
			Crm_2011: number,
			/** 100000002 */
			Crm_2013: number,
			/** 100000003 */
			Crm_2015: number,
			/** 100000004 */
			Crm_2016: number,
			/** 100000005 */
			Dynamics_365: number
		},
		devkit_SingleOptionSetCode: {
			/** 100000000 */
			Crm_4: number,
			/** 100000001 */
			Crm_2011: number,
			/** 100000002 */
			Crm_2013: number,
			/** 100000003 */
			Crm_2015: number,
			/** 100000004 */
			Crm_2016: number,
			/** 100000005 */
			Dynamics_365: number
		},
		devkit_SingleOptionSetCodeCalculated: {
			/** 100000000 */
			Crm_4: number,
			/** 100000001 */
			Crm_2011: number,
			/** 100000002 */
			Crm_2013: number,
			/** 100000003 */
			Crm_2015: number,
			/** 100000004 */
			Crm_2016: number,
			/** 100000005 */
			Dynamics_365: number
		},
		statecode: {
			/** 0 */
			Active: number,
			/** 1 */
			Inactive: number
		},
		statuscode: {
			/** 1 */
			Active: number,
			/** 2 */
			Inactive: number
		}
	}
	class devkit_WebApiApi {
		constructor(entity?: object);
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of devkit_WebApi enttiy */
		OptionSet: devkit_WebApiOptionSet;
		/** ReadOnly - Unique identifier of the user who created the record. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		devkit_MultiOptionSetCode: WebApi.MultiOptionSetValue;
		/** The name of the custom entity. */
		devkit_Name: WebApi.StringValue;
		devkit_SingleOptionSetCode: WebApi.OptionSetValue;
		/** ReadOnly */
		devkit_SingleOptionSetCodeCalculated: WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		devkit_WebApiId: WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** ReadOnly - Unique identifier of the user who modified the record. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedOnBehalfByYomiName: WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: WebApi.OwnerUserValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: WebApi.OwnerTeamValue;
		/** ReadOnly - Name of the owner */
		OwnerIdName: WebApi.StringValue;
		/** Owner Id Type */
		OwnerIdType: WebApi.StringValue;
		/** ReadOnly - Yomi name of the owner */
		OwnerIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier for the team that owns the record. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier for the user that owns the record. */
		OwningUser: WebApi.LookupValue;
		/** Status of the WebApi */
		statecode: WebApi.OptionSetValue;
		/** Reason for the status of the WebApi */
		statuscode: WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version Number */
		VersionNumber: WebApi.BigIntValue;
	}
}
//{'JsForm':['WebApi'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':false}