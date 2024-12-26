//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSearch_provider_Main_form {
		interface tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37_Sections {
			_2D5C8850_749F_4FCA_807A_E58949695F92: DevKit.Controls.Section;
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37 extends DevKit.Controls.ITab {
			Section: tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37_Sections;
		}
		interface Tabs {
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37: tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			ConnectionId: DevKit.Controls.String;
			/** This field specifies the description of Search provider record */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the search provider */
			msdyn_Name: DevKit.Controls.String;
			organization: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			SearchType: DevKit.Controls.OptionSet;
			SharepointURL: DevKit.Controls.String;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
		}
		interface Navigation {
			IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid: DevKit.Controls.NavigationItem
		}
	}
	class FormSearch_provider_Main_form extends DevKit.IForm {
		/**
		* Search provider Main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Search_provider_Main_form */
		Body: DevKit.FormSearch_provider_Main_form.Body;
		/** The Navigation of form Search_provider_Main_form */
		Navigation: DevKit.FormSearch_provider_Main_form.Navigation;
		/** The SidePanes of form Search_provider_Main_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_kmfederatedsearchconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_kmfederatedsearchconfigApi
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
		/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
		ConnectionId: string;
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
		/** This field specifies the description of Search provider record */
		msdyn_Description: string;
		/** Unique identifier for entity instances */
		msdyn_kmfederatedsearchconfigId: string;
		/** The name of the search provider */
		msdyn_Name: string;
		Organization: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		SearchType: OptionSet.msdyn_kmfederatedsearchconfig.SearchType;
		SharepointURL: string;
		/** Status of the kmfederatedsearchconfig */
		statecode: OptionSet.msdyn_kmfederatedsearchconfig.statecode;
		/** Reason for the status of the kmfederatedsearchconfig */
		statuscode: OptionSet.msdyn_kmfederatedsearchconfig.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			readonly ConnectionId: string;
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
			/** This field specifies the description of Search provider record */
			readonly msdyn_Description: string;
			/** Unique identifier for entity instances */
			readonly msdyn_kmfederatedsearchconfigId: string;
			/** The name of the search provider */
			readonly msdyn_Name: string;
			readonly Organization: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			readonly SearchType: string;
			readonly SharepointURL: string;
			/** Status of the kmfederatedsearchconfig */
			readonly statecode: string;
			/** Reason for the status of the kmfederatedsearchconfig */
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
	namespace msdyn_kmfederatedsearchconfig {
		enum SearchType {
			/** 100000000 */
			Cross_Organizational_Search,
			/** 100000002 */
			Microsoft_Graph_Connector,
			/** 100000001 */
			Sharepoint
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}