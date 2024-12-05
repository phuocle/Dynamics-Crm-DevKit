//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class appactionApi {
		/**
		* DynamicsCrm.DevKit appactionApi
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
		/** Unique identifier for entity instances */
		appactionId: string;
		/** Unique identifier for AppModule associated with Modern Command */
		AppModuleId: string;
		ButtonAccessibilityText: string;
		/** Label Text renders for Modern Command Button */
		ButtonLabelText: string;
		/** Order of the Modern Command Button (Depreciated) */
		ButtonSequencePriority: number;
		/** Tooltip Description for Modern Command Button */
		ButtonTooltipDescription: string;
		/** Tooltip Title for Modern Command Button */
		ButtonTooltipTitle: string;
		/** Client Type associated with Modern Command */
		ClientType: Array<OptionSet.appaction.ClientType>;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.appaction.ComponentState;
		/** Context scope associated with Modern Command */
		Context: OptionSet.appaction.Context;
		/** Context Entity associated with Modern Command */
		ContextEntity: string;
		/** Context Name associated with Modern Command */
		ContextValue: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Font Icon for Modern Command Button */
		FontIcon: string;
		/** Group Title for Modern Command Group Button */
		GroupTitle: string;
		Hidden: boolean;
		/** Unique identifier of the Icon Webresource from Webresource entity which used by the associated Modern Command */
		IconWebResourceId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Flag indicates the Modern Command Button is disabled for end user usage i.e. ribbon equivalent will be shown */
		IsDisabled: boolean;
		/** Flag indicates the Modern Command Group Button Title is hidden */
		isGroupTitleHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Location of the Command bar associated with the Modern Command. */
		Location: OptionSet.appaction.Location;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the AppAction entity. */
		name: string;
		/** Name of the Component Library where FX Action stored. */
		OnClickEventFormulaComponentLibrary: string;
		/** Unique identifier of the Component Library associated with Modern Command. */
		OnClickEventFormulaComponentLibraryId: string;
		/** Name of the Component for FX Modern Command. */
		OnClickEventFormulaComponentName: string;
		/** Name of the Function for FX Modern Command. */
		OnClickEventFormulaFunctionName: string;
		/** Name of the Function for JS Modern Command. */
		OnClickEventJavaScriptFunctionName: string;
		/** Parameters of the Function for JS Modern Command. */
		OnClickEventJavaScriptParameters: string;
		/** Unique identifier of the JavaScript WebResource from the Webresource entity which used by associated JS Modern Command. */
		OnClickEventJavaScriptWebResourceId: string;
		/** Type of Action associated with Modern Command. */
		OnClickEventType: OptionSet.appaction.OnClickEventType;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Origin of App Action. */
		Origin: OptionSet.appaction.Origin;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier for Parent Modern Command associated with Modern Command. */
		ParentAppActionId: string;
		/** Order of the Modern Command to be Displayed. */
		Sequence: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the App Action */
		statecode: OptionSet.appaction.statecode;
		/** Reason for the status of the App Action */
		statuscode: OptionSet.appaction.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type of Modern Command Button */
		Type: OptionSet.appaction.Type;
		/** Unique Name of the AppAction */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Name of the Component Library where FX Visible Rule stored associated with Modern Command. */
		VisibilityFormulaComponentLibrary: string;
		/** Unique identifier of the Component Library associated with Modern Command. */
		VisibilityFormulaComponentLibraryId: string;
		/** Name of the Component for FX Visible Rule associated with Modern Command. */
		VisibilityFormulaComponentName: string;
		/** Name of the Function for FX Visible Rule assoicated with Modern Command. */
		VisibilityFormulaFunctionName: string;
		/** Visibily Type of the Modern Command which should be either FX/Classic or None. */
		VisibilityType: OptionSet.appaction.VisibilityType;
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly appactionId: string;
			/** Unique identifier for AppModule associated with Modern Command */
			readonly AppModuleId: string;
			readonly ButtonAccessibilityText: string;
			/** Label Text renders for Modern Command Button */
			readonly ButtonLabelText: string;
			/** Order of the Modern Command Button (Depreciated) */
			readonly ButtonSequencePriority: string;
			/** Tooltip Description for Modern Command Button */
			readonly ButtonTooltipDescription: string;
			/** Tooltip Title for Modern Command Button */
			readonly ButtonTooltipTitle: string;
			/** Client Type associated with Modern Command */
			readonly ClientType: Array<string>;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Context scope associated with Modern Command */
			readonly Context: string;
			/** Context Entity associated with Modern Command */
			readonly ContextEntity: string;
			/** Context Name associated with Modern Command */
			readonly ContextValue: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Font Icon for Modern Command Button */
			readonly FontIcon: string;
			/** Group Title for Modern Command Group Button */
			readonly GroupTitle: string;
			readonly Hidden: string;
			/** Unique identifier of the Icon Webresource from Webresource entity which used by the associated Modern Command */
			readonly IconWebResourceId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Flag indicates the Modern Command Button is disabled for end user usage i.e. ribbon equivalent will be shown */
			readonly IsDisabled: string;
			/** Flag indicates the Modern Command Group Button Title is hidden */
			readonly isGroupTitleHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Location of the Command bar associated with the Modern Command. */
			readonly Location: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the AppAction entity. */
			readonly name: string;
			/** Name of the Component Library where FX Action stored. */
			readonly OnClickEventFormulaComponentLibrary: string;
			/** Unique identifier of the Component Library associated with Modern Command. */
			readonly OnClickEventFormulaComponentLibraryId: string;
			/** Name of the Component for FX Modern Command. */
			readonly OnClickEventFormulaComponentName: string;
			/** Name of the Function for FX Modern Command. */
			readonly OnClickEventFormulaFunctionName: string;
			/** Name of the Function for JS Modern Command. */
			readonly OnClickEventJavaScriptFunctionName: string;
			/** Parameters of the Function for JS Modern Command. */
			readonly OnClickEventJavaScriptParameters: string;
			/** Unique identifier of the JavaScript WebResource from the Webresource entity which used by associated JS Modern Command. */
			readonly OnClickEventJavaScriptWebResourceId: string;
			/** Type of Action associated with Modern Command. */
			readonly OnClickEventType: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Origin of App Action. */
			readonly Origin: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier for Parent Modern Command associated with Modern Command. */
			readonly ParentAppActionId: string;
			/** Order of the Modern Command to be Displayed. */
			readonly Sequence: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the App Action */
			readonly statecode: string;
			/** Reason for the status of the App Action */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type of Modern Command Button */
			readonly Type: string;
			/** Unique Name of the AppAction */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Name of the Component Library where FX Visible Rule stored associated with Modern Command. */
			readonly VisibilityFormulaComponentLibrary: string;
			/** Unique identifier of the Component Library associated with Modern Command. */
			readonly VisibilityFormulaComponentLibraryId: string;
			/** Name of the Component for FX Visible Rule associated with Modern Command. */
			readonly VisibilityFormulaComponentName: string;
			/** Name of the Function for FX Visible Rule assoicated with Modern Command. */
			readonly VisibilityFormulaFunctionName: string;
			/** Visibily Type of the Modern Command which should be either FX/Classic or None. */
			readonly VisibilityType: string;
		}
	}
}
declare namespace OptionSet {
	namespace appaction {
		enum ClientType {
			/** 0 */
			Browser,
			/** 2 */
			Mail_App,
			/** 1 */
			Mobile
		}
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
		enum Context {
			/** 0 */
			All,
			/** 1 */
			Entity
		}
		enum Location {
			/** 3 */
			Associated_Grid,
			/** 6 */
			Dashboard,
			/** 0 */
			Form,
			/** 5 */
			Global_Header,
			/** 1 */
			Main_Grid,
			/** 4 */
			Quick_Form,
			/** 2 */
			Sub_Grid
		}
		enum OnClickEventType {
			/** 1 */
			Formula,
			/** 2 */
			JavaScript,
			/** 0 */
			None
		}
		enum Origin {
			/** 0 */
			Default,
			/** 2 */
			Enhanced_Migrated,
			/** 1 */
			Migrated
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
		enum Type {
			/** 1 */
			Dropdown_Button,
			/** 3 */
			Group,
			/** 2 */
			Split_Button,
			/** 0 */
			Standard_Button
		}
		enum VisibilityType {
			/** 2 */
			Classic_Rules,
			/** 1 */
			Formula,
			/** 0 */
			None
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