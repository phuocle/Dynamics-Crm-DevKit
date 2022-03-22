//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourcerequest_Information {
		interface tab__F42C3DC0_B481_45B5_A0B1_754BC4FA39B6_Sections {
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab__F42C3DC0_B481_45B5_A0B1_754BC4FA39B6 extends DevKit.Controls.ITab {
			Section: tab__F42C3DC0_B481_45B5_A0B1_754BC4FA39B6_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_F42C3DC0_B481_45B5_A0B1_754BC4FA39B6: tab__F42C3DC0_B481_45B5_A0B1_754BC4FA39B6;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the position description of the related project team member position. */
			msdyn_positiondescription: DevKit.Controls.String;
			/** Select the user submitting the request. */
			msdyn_requestedby: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Resource Request */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface quickForm_Requirement_General_Body {
			msdyn_allocationmethod: DevKit.Controls.QuickView;
			msdyn_city: DevKit.Controls.QuickView;
			msdyn_costprice: DevKit.Controls.QuickView;
			msdyn_country: DevKit.Controls.QuickView;
			msdyn_duration: DevKit.Controls.QuickView;
			msdyn_fromdate: DevKit.Controls.QuickView;
			msdyn_percentage: DevKit.Controls.QuickView;
			msdyn_requeststatus: DevKit.Controls.QuickView;
			msdyn_stateorprovince: DevKit.Controls.QuickView;
			msdyn_todate: DevKit.Controls.QuickView;
			msdyn_type: DevKit.Controls.QuickView;
			msdyn_workhourtemplate: DevKit.Controls.QuickView;
			TransactionCurrencyId: DevKit.Controls.QuickView;
		}
		interface quickForm_Requirement_Competencies_Body {
		}
		interface quickForm_Requirement_Others_Body {
		}
		interface quickForm_Requirement_General extends DevKit.Controls.IQuickView {
			Body: quickForm_Requirement_General_Body;
		}
		interface quickForm_Requirement_Competencies extends DevKit.Controls.IQuickView {
			Body: quickForm_Requirement_Competencies_Body;
		}
		interface quickForm_Requirement_Others extends DevKit.Controls.IQuickView {
			Body: quickForm_Requirement_Others_Body;
		}
		interface QuickForm {
			Requirement_General: quickForm_Requirement_General;
			Requirement_Competencies: quickForm_Requirement_Competencies;
			Requirement_Others: quickForm_Requirement_Others;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_resourcerequest_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcerequest_Information */
		Body: DevKit.Formmsdyn_resourcerequest_Information.Body;
		/** The Navigation of form msdyn_resourcerequest_Information */
		Navigation: DevKit.Formmsdyn_resourcerequest_Information.Navigation;
		/** The QuickForm of form msdyn_resourcerequest_Information */
		QuickForm: DevKit.Formmsdyn_resourcerequest_Information.QuickForm;
		/** The Process of form msdyn_resourcerequest_Information */
		Process: DevKit.Formmsdyn_resourcerequest_Information.Process;
		/** The SidePanes of form msdyn_resourcerequest_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_resourcerequest_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the user submitting the request. */
			msdyn_requestedby: DevKit.Controls.Lookup;
			/** Unique identifier of the resource requirement for the resource request. */
			msdyn_resourcerequirementid: DevKit.Controls.Lookup;
			/** Reason for the status of the Resource Request */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_resourcerequest_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcerequest_Quick_Create */
		Body: DevKit.Formmsdyn_resourcerequest_Quick_Create.Body;
	}
	class msdyn_resourcerequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourcerequestApi
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
		/** Select the user who claimed the request. */
		msdyn_claimedby: string;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Shows the position description of the related project team member position. */
		msdyn_positiondescription: string;
		/** Select the user submitting the request. */
		msdyn_requestedby: string;
		/** Unique identifier for entity instances */
		msdyn_resourcerequestId: string;
		/** Unique identifier of the resource requirement for the resource request. */
		msdyn_resourcerequirementid: string;
		/** Primary role id in resource requirement */
		msdyn_roleid: string;
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
		/** Status of the Resource Request */
		statecode: OptionSet.msdyn_resourcerequest.statecode;
		/** Reason for the status of the Resource Request */
		statuscode: OptionSet.msdyn_resourcerequest.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourcerequest {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350008 */
			Fulfilled,
			/** 192350009 */
			In_Progress,
			/** 192350011 */
			Inactive,
			/** 192350003 */
			Needs_Review,
			/** 192350000 */
			Submitted
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}