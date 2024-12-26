//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_customerdataselection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__7071268A_8A8C_4E21_84A8_D3B2F9D454A2_Sections {
			_7071268A_8A8C_4E21_84A8_D3B2F9D454A2_SECTION_2: DevKit.Controls.Section;
			_EDB718F9_BCBA_4532_8A76_121037B762D1: DevKit.Controls.Section;
		}
		interface tab__7071268A_8A8C_4E21_84A8_D3B2F9D454A2 extends DevKit.Controls.ITab {
			Section: tab__7071268A_8A8C_4E21_84A8_D3B2F9D454A2_Sections;
		}
		interface Tabs {
			_7071268A_8A8C_4E21_84A8_D3B2F9D454A2: tab__7071268A_8A8C_4E21_84A8_D3B2F9D454A2;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_column1: DevKit.Controls.String;
			msdynmkt_column10: DevKit.Controls.String;
			msdynmkt_column2: DevKit.Controls.String;
			msdynmkt_column3: DevKit.Controls.String;
			msdynmkt_column4: DevKit.Controls.String;
			msdynmkt_column5: DevKit.Controls.String;
			msdynmkt_column6: DevKit.Controls.String;
			msdynmkt_column7: DevKit.Controls.String;
			msdynmkt_column8: DevKit.Controls.String;
			msdynmkt_column9: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_customerdataselection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_customerdataselection_Information */
		Body: DevKit.Formmsdynmkt_customerdataselection_Information.Body;
		/** The Header section of form msdynmkt_customerdataselection_Information */
		Header: DevKit.Formmsdynmkt_customerdataselection_Information.Header;
		/** The Navigation of form msdynmkt_customerdataselection_Information */
		Navigation: DevKit.Formmsdynmkt_customerdataselection_Information.Navigation;
		/** The SidePanes of form msdynmkt_customerdataselection_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_customerdataselectionApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_customerdataselectionApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdynmkt_column1: string;
		msdynmkt_column10: string;
		msdynmkt_column2: string;
		msdynmkt_column3: string;
		msdynmkt_column4: string;
		msdynmkt_column5: string;
		msdynmkt_column6: string;
		msdynmkt_column7: string;
		msdynmkt_column8: string;
		msdynmkt_column9: string;
		/** Unique identifier for entity instances */
		msdynmkt_customerdataselectionId: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Customer Data Selection */
		statecode: OptionSet.msdynmkt_customerdataselection.statecode;
		/** Reason for the status of the Customer Data Selection */
		statuscode: OptionSet.msdynmkt_customerdataselection.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdynmkt_column1: string;
			readonly msdynmkt_column10: string;
			readonly msdynmkt_column2: string;
			readonly msdynmkt_column3: string;
			readonly msdynmkt_column4: string;
			readonly msdynmkt_column5: string;
			readonly msdynmkt_column6: string;
			readonly msdynmkt_column7: string;
			readonly msdynmkt_column8: string;
			readonly msdynmkt_column9: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_customerdataselectionId: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Customer Data Selection */
			readonly statecode: string;
			/** Reason for the status of the Customer Data Selection */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_customerdataselection {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}