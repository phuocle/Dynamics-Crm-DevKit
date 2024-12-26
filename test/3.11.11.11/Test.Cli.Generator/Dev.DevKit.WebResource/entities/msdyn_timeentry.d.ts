//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntry_Edit_Form {
		interface tab__9C558780_D2CE_4E55_8FDD_37082D8196BE_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
		}
		interface tab__9C558780_D2CE_4E55_8FDD_37082D8196BE extends DevKit.Controls.ITab {
			Section: tab__9C558780_D2CE_4E55_8FDD_37082D8196BE_Sections;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_9C558780_D2CE_4E55_8FDD_37082D8196BE: tab__9C558780_D2CE_4E55_8FDD_37082D8196BE;
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormEntry_Edit_Form extends DevKit.IForm {
		/**
		* Entry Edit Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entry_Edit_Form */
		Body: DevKit.FormEntry_Edit_Form.Body;
		/** The Process of form Entry_Edit_Form */
		Process: DevKit.FormEntry_Edit_Form.Process;
		/** The SidePanes of form Entry_Edit_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_timeentry_Field_Service_Information {
		interface tab_General_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the bookable resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Time Entry. */
			msdyn_BookableResourceBooking: DevKit.Controls.Lookup;
			/** Booking Status */
			msdyn_BookingStatus: DevKit.Controls.Lookup;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** The end time of the time entry. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** The start time of the time entry. */
			msdyn_start: DevKit.Controls.DateTime;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
			msdyn_timeoffrequest: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Orders associated with Time Entry. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_timeentry_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeentry_Field_Service_Information */
		Body: DevKit.Formmsdyn_timeentry_Field_Service_Information.Body;
		/** The Process of form msdyn_timeentry_Field_Service_Information */
		Process: DevKit.Formmsdyn_timeentry_Field_Service_Information.Process;
		/** The SidePanes of form msdyn_timeentry_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_timeentry_Information {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Controls.Date;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			nav_msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_timeentry_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeentry_Information */
		Body: DevKit.Formmsdyn_timeentry_Information.Body;
		/** The Navigation of form msdyn_timeentry_Information */
		Navigation: DevKit.Formmsdyn_timeentry_Information.Navigation;
		/** The Process of form msdyn_timeentry_Information */
		Process: DevKit.Formmsdyn_timeentry_Information.Process;
		/** The SidePanes of form msdyn_timeentry_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRow_Edit_Form {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormRow_Edit_Form extends DevKit.IForm {
		/**
		* Row Edit Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Row_Edit_Form */
		Body: DevKit.FormRow_Edit_Form.Body;
		/** The Process of form Row_Edit_Form */
		Process: DevKit.FormRow_Edit_Form.Process;
		/** The SidePanes of form Row_Edit_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTESA_Time_Entry_Main_Form {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTESA_Time_Entry_Main_Form extends DevKit.IForm {
		/**
		* TESA Time Entry Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TESA_Time_Entry_Main_Form */
		Body: DevKit.FormTESA_Time_Entry_Main_Form.Body;
		/** The Process of form TESA_Time_Entry_Main_Form */
		Process: DevKit.FormTESA_Time_Entry_Main_Form.Process;
		/** The SidePanes of form TESA_Time_Entry_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCreate_Time_Entry {
		interface tab_Time_Entry_Quick_Create_Form_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_Time_Entry_Quick_Create_Form extends DevKit.Controls.ITab {
			Section: tab_Time_Entry_Quick_Create_Form_Sections;
		}
		interface Tabs {
			Time_Entry_Quick_Create_Form: tab_Time_Entry_Quick_Create_Form;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Controls.Date;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
		}
	}
	class FormCreate_Time_Entry extends DevKit.IForm {
		/**
		* Create Time Entry [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Create_Time_Entry */
		Body: DevKit.FormCreate_Time_Entry.Body;
	}
	namespace FormField_Service_Quick_Create {
		interface tab_Time_Entry_Quick_Create_Form_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_Time_Entry_Quick_Create_Form extends DevKit.Controls.ITab {
			Section: tab_Time_Entry_Quick_Create_Form_Sections;
		}
		interface Tabs {
			Time_Entry_Quick_Create_Form: tab_Time_Entry_Quick_Create_Form;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the bookable resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Time Entry. */
			msdyn_BookableResourceBooking: DevKit.Controls.Lookup;
			/** Booking Status */
			msdyn_BookingStatus: DevKit.Controls.Lookup;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** The end time of the time entry. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** The start time of the time entry. */
			msdyn_start: DevKit.Controls.DateTime;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
			msdyn_timeoffrequest: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Orders associated with Time Entry. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
	}
	class FormField_Service_Quick_Create extends DevKit.IForm {
		/**
		* Field Service Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Field_Service_Quick_Create */
		Body: DevKit.FormField_Service_Quick_Create.Body;
	}
	namespace FormTESA_Time_Entry_Quick_Create_Form {
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

		}
	}
	class FormTESA_Time_Entry_Quick_Create_Form extends DevKit.IForm {
		/**
		* TESA Time Entry Quick Create Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TESA_Time_Entry_Quick_Create_Form */
		Body: DevKit.FormTESA_Time_Entry_Quick_Create_Form.Body;
	}
	class msdyn_timeentryApi {
		/**
		* DynamicsCrm.DevKit msdyn_timeentryApi
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
		/** Shows the bookable resource. */
		msdyn_bookableresource: string;
		/** Unique identifier for Resource Booking associated with Time Entry. */
		msdyn_BookableResourceBooking: string;
		/** Booking Status */
		msdyn_BookingStatus: string;
		/** Enter the time entry date. */
		msdyn_date_UtcDateOnly: Date;
		/** Type the description of the time entry. */
		msdyn_description: string;
		/** Shows the time spent. */
		msdyn_duration: number;
		/** The end time of the time entry. */
		msdyn_end_UtcDateAndTime: Date;
		/** Select the entry status. */
		msdyn_entryStatus: OptionSet.msdyn_timeentry.msdyn_entryStatus;
		/** Type the external description of the time entry. */
		msdyn_externalDescription: string;
		/** For internal use only. */
		msdyn_internalflags: string;
		/** Select the manager of the time entry user. This field is used for approval. */
		msdyn_manager: string;
		/** Select the project that the time entry is related to. */
		msdyn_project: string;
		/** Select the project task that the time entry is related to. */
		msdyn_projectTask: string;
		/** The identifier of the related item. */
		msdyn_relatedItemId: string;
		/** The related item type */
		msdyn_relatedItemType: OptionSet.msdyn_timeentry.msdyn_relatedItemType;
		/** Select the role that the user has in the project that the time entry is for. */
		msdyn_resourceCategory: string;
		/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** The start time of the time entry. */
		msdyn_start_UtcDateAndTime: Date;
		msdyn_targetEntryStatus: OptionSet.msdyn_timeentry.msdyn_targetEntryStatus;
		/** The unique identifier for a time entry. */
		msdyn_timeentryId: string;
		/** Unique identifier for Time Source associated with Time Entry. */
		msdyn_timeentrysettingId: string;
		/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
		msdyn_timeoffrequest: string;
		/** Shows the transaction category. */
		msdyn_transactioncategory: string;
		/** Select the time entry type. */
		msdyn_type: OptionSet.msdyn_timeentry.msdyn_type;
		/** Unique identifier for Work Orders associated with Time Entry. */
		msdyn_WorkOrder: string;
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
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Status of the Time Entry */
		statecode: OptionSet.msdyn_timeentry.statecode;
		/** Reason for the status of the Time Entry */
		statuscode: OptionSet.msdyn_timeentry.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
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
			/** Shows the bookable resource. */
			readonly msdyn_bookableresource: string;
			/** Unique identifier for Resource Booking associated with Time Entry. */
			readonly msdyn_BookableResourceBooking: string;
			/** Booking Status */
			readonly msdyn_BookingStatus: string;
			/** Enter the time entry date. */
			readonly msdyn_date_UtcDateOnly: string;
			/** Type the description of the time entry. */
			readonly msdyn_description: string;
			/** Shows the time spent. */
			readonly msdyn_duration: string;
			/** The end time of the time entry. */
			readonly msdyn_end_UtcDateAndTime: string;
			/** Select the entry status. */
			readonly msdyn_entryStatus: string;
			/** Type the external description of the time entry. */
			readonly msdyn_externalDescription: string;
			/** For internal use only. */
			readonly msdyn_internalflags: string;
			/** Select the manager of the time entry user. This field is used for approval. */
			readonly msdyn_manager: string;
			/** Select the project that the time entry is related to. */
			readonly msdyn_project: string;
			/** Select the project task that the time entry is related to. */
			readonly msdyn_projectTask: string;
			/** The identifier of the related item. */
			readonly msdyn_relatedItemId: string;
			/** The related item type */
			readonly msdyn_relatedItemType: string;
			/** Select the role that the user has in the project that the time entry is for. */
			readonly msdyn_resourceCategory: string;
			/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
			readonly msdyn_ResourceOrganizationalUnitId: string;
			/** The start time of the time entry. */
			readonly msdyn_start_UtcDateAndTime: string;
			readonly msdyn_targetEntryStatus: string;
			/** The unique identifier for a time entry. */
			readonly msdyn_timeentryId: string;
			/** Unique identifier for Time Source associated with Time Entry. */
			readonly msdyn_timeentrysettingId: string;
			/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
			readonly msdyn_timeoffrequest: string;
			/** Shows the transaction category. */
			readonly msdyn_transactioncategory: string;
			/** Select the time entry type. */
			readonly msdyn_type: string;
			/** Unique identifier for Work Orders associated with Time Entry. */
			readonly msdyn_WorkOrder: string;
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
			/** Contains the id of the process associated with the entity. */
			readonly processid: string;
			/** Contains the id of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Time Entry */
			readonly statecode: string;
			/** Reason for the status of the Time Entry */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly traversedpath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_timeentry {
		enum msdyn_entryStatus {
			/** 192350002 */
			Approved,
			/** 192354320 */
			Cancelled,
			/** 192350000 */
			Draft,
			/** 192350004 */
			Recall_Requested,
			/** 192350001 */
			Returned,
			/** 192350003 */
			Submitted
		}
		enum msdyn_relatedItemType {
			/** 192350100 */
			Exchange_Appointments,
			/** 192350000 */
			None,
			/** 192350002 */
			Resource_Assignment,
			/** 192350001 */
			Resource_Booking
		}
		enum msdyn_targetEntryStatus {
			/** 192350002 */
			Approved,
			/** 192354320 */
			Cancelled,
			/** 192350000 */
			Draft,
			/** 192350004 */
			Recall_Requested,
			/** 192350001 */
			Returned,
			/** 192350003 */
			Submitted
		}
		enum msdyn_type {
			/** 192350001 */
			Absence,
			/** 192355000 */
			On_Break,
			/** 192354320 */
			Overtime,
			/** 192355001 */
			Travel,
			/** 192350002 */
			Vacation,
			/** 192350000 */
			Work
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}