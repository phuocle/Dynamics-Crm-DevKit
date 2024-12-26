//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormJourney_Template {
		interface Header extends DevKit.Controls.IHeader {
			msdynmkt_name: DevKit.Controls.ELSE3???;//header_msdynmkt_name - 78C341C7-9DD9-4DCF-87DA-D22B89103AA0 -- FOR DEBUG 
		}
		interface Tabs {
		}
		interface Body {
			/** Description */
			msdynmkt_description: DevKit.Controls.String;
			/** Name */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormJourney_Template extends DevKit.IForm {
		/**
		* Journey Template [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Journey_Template */
		Body: DevKit.FormJourney_Template.Body;
		/** The Header section of form Journey_Template */
		Header: DevKit.FormJourney_Template.Header;
		/** The Navigation of form Journey_Template */
		Navigation: DevKit.FormJourney_Template.Navigation;
		/** The SidePanes of form Journey_Template */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_journeytemplateApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_journeytemplateApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdynmkt_journeytemplate.ComponentState;
		/** Journey Template Created By */
		readonly CreatedBy: string;
		/** Created On */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Created On Behalf By */
		readonly CreatedOnBehalfBy: string;
		/** Journey Template Import Sequence Number */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Modified By */
		readonly ModifiedBy: string;
		/** Modified On */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Journey Template Modified On Behalf By */
		readonly ModifiedOnBehalfBy: string;
		/** Description */
		msdynmkt_description: string;
		/** Journey Template Frequency Cap Type */
		msdynmkt_frequencycaptype: OptionSet.msdynmkt_journeytemplate.msdynmkt_frequencycaptype;
		msdynmkt_journeyEndTime_UtcDateAndTime: Date;
		msdynmkt_journeyStartTime_TimezoneDateAndTime: Date;
		/** Journey Template Id */
		msdynmkt_journeytemplateId: string;
		msdynmkt_journeytemplateJSON: string;
		/** Name */
		msdynmkt_name: string;
		msdynmkt_triggerType: OptionSet.msdynmkt_journeytemplate.msdynmkt_triggerType;
		/** Journey Template Unique Name */
		msdynmkt_uniquename: string;
		/** Journey Template OverriddenCreatedOn */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Journey Template Owning Business Unit */
		readonly OwningBusinessUnit: string;
		/** Journey Template Owning Team */
		readonly OwningTeam: string;
		/** Journey Template Owning User */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** State Code */
		statecode: OptionSet.msdynmkt_journeytemplate.statecode;
		/** Journey Template Status Code */
		statuscode: OptionSet.msdynmkt_journeytemplate.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Journey Template Time Zone Rule Version */
		TimeZoneRuleVersionNumber: number;
		/** Journey Template UTC TimeZone Rule Version Number */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Journey Template Created By */
			readonly CreatedBy: string;
			/** Created On */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Created On Behalf By */
			readonly CreatedOnBehalfBy: string;
			/** Journey Template Import Sequence Number */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Modified By */
			readonly ModifiedBy: string;
			/** Modified On */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Journey Template Modified On Behalf By */
			readonly ModifiedOnBehalfBy: string;
			/** Description */
			readonly msdynmkt_description: string;
			/** Journey Template Frequency Cap Type */
			readonly msdynmkt_frequencycaptype: string;
			readonly msdynmkt_journeyEndTime_UtcDateAndTime: string;
			readonly msdynmkt_journeyStartTime_TimezoneDateAndTime: string;
			/** Journey Template Id */
			readonly msdynmkt_journeytemplateId: string;
			readonly msdynmkt_journeytemplateJSON: string;
			/** Name */
			readonly msdynmkt_name: string;
			readonly msdynmkt_triggerType: string;
			/** Journey Template Unique Name */
			readonly msdynmkt_uniquename: string;
			/** Journey Template OverriddenCreatedOn */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Journey Template Owning Business Unit */
			readonly OwningBusinessUnit: string;
			/** Journey Template Owning Team */
			readonly OwningTeam: string;
			/** Journey Template Owning User */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** State Code */
			readonly statecode: string;
			/** Journey Template Status Code */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Journey Template Time Zone Rule Version */
			readonly TimeZoneRuleVersionNumber: string;
			/** Journey Template UTC TimeZone Rule Version Number */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_journeytemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdynmkt_frequencycaptype {
			/** 0 */
			Journey_Template_Frequency_Cap_Type_0,
			/** 1 */
			Journey_Template_Frequency_Cap_Type_1
		}
		enum msdynmkt_triggerType {
			/** 0 */
			Journey_Template_Trigger_Type,
			/** 1 */
			Journey_Template_Trigger_Type_1,
			/** 2 */
			Journey_Template_Trigger_Type_2,
			/** 3 */
			Journey_Template_Trigger_Type_3
		}
		enum statecode {
			/** 0 */
			Journey_Template_State_Code_0,
			/** 1 */
			Journey_Template_State_Code_1,
			/** 4 */
			Journey_Template_State_Code_4
		}
		enum statuscode {
			/** 1 */
			Journey_Template_Status_Code_1,
			/** 2 */
			Journey_Template_Status_Code_2,
			/** 6 */
			Journey_Template_Status_Code_6
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