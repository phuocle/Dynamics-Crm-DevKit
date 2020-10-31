//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class adobe_agreementtemplateApi {
		/**
		* DynamicsCrm.DevKit adobe_agreementtemplateApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Enable this option to make the template available for sending */
		adobe_activetemplate: DevKit.WebApi.BooleanValue;
		/** Redirect your signers or approvers to a landing page of your choice */
		adobe_addpostsignredirecturl: DevKit.WebApi.BooleanValue;
		adobe_agreementname: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		adobe_agreementtemplateId: DevKit.WebApi.GuidValue;
		adobe_ApplySettings: DevKit.WebApi.BooleanValue;
		adobe_assigntoallusers: DevKit.WebApi.BooleanValue;
		adobe_authoring: DevKit.WebApi.BooleanValue;
		/** Select an option for automatic reminder */
		adobe_automaticreminder: DevKit.WebApi.OptionSetValue;
		/** Send agreements out for signature bypassing the Agreement page step. Note this prevents your users from making modifications to recipients, messaging, or the documents */
		adobe_autosending: DevKit.WebApi.BooleanValue;
		adobe_currentagreementid: DevKit.WebApi.StringValue;
		adobe_datamapping: DevKit.WebApi.LookupValue;
		adobe_datamappingentity: DevKit.WebApi.StringValue;
		adobe_daystoexpire: DevKit.WebApi.IntegerValue;
		/** Make this template default for selected primary entity */
		adobe_defaulttemplate: DevKit.WebApi.BooleanValue;
		adobe_Expires: DevKit.WebApi.BooleanValue;
		adobe_forceanyorder: DevKit.WebApi.BooleanValue;
		/** Select this option when signers are present and will sign in person */
		adobe_hostsigning: DevKit.WebApi.BooleanValue;
		adobe_identityverification: DevKit.WebApi.OptionSetValue;
		adobe_message: DevKit.WebApi.StringValue;
		adobe_migrationguid: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		adobe_name: DevKit.WebApi.StringValue;
		adobe_noteids: DevKit.WebApi.StringValue;
		adobe_plugintrigger: DevKit.WebApi.StringValue;
		adobe_postsigningredirecturl: DevKit.WebApi.StringValue;
		/** It is recommended you allow the user to see the completion screen and download any documents before re-directing to your landing page.  Adobe recommends between 10-30 seconds. */
		adobe_postsignredirectdelay: DevKit.WebApi.IntegerValue;
		adobe_postsignredirecturl: DevKit.WebApi.StringValue;
		adobe_primaryentity: DevKit.WebApi.StringValue;
		adobe_securesignedpdf: DevKit.WebApi.BooleanValue;
		adobe_selectedlanguage: DevKit.WebApi.StringValue;
		/** Add yourself to the signing order */
		adobe_selfsigning: DevKit.WebApi.BooleanValue;
		adobe_sendersigningoptions: DevKit.WebApi.OptionSetValue;
		adobe_sendersignsfirst: DevKit.WebApi.BooleanValue;
		adobe_sendersignsonly: DevKit.WebApi.BooleanValue;
		adobe_sequentialsigning: DevKit.WebApi.BooleanValue;
		adobe_signaturetypeesign: DevKit.WebApi.BooleanValue;
		adobe_signedpdfpassword: DevKit.WebApi.StringValue;
		adobe_signingpassword: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Agreement Template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement Template */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace adobe_agreementtemplate {
		enum adobe_automaticreminder {
			/** 648770000 */
			Never,
			/** 648770001 */
			Every_Day_Until_Signed,
			/** 648770002 */
			Every_Week_Until_Signed
		}
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770004 */
			PHONE,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_sendersigningoptions {
			/** 648770000 */
			I_sign_first,
			/** 648770001 */
			I_sign_last,
			/** 648770002 */
			Only_I_sign
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}