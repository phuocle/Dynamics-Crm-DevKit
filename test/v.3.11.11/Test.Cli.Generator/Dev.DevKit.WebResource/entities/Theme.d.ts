//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTheme {
		interface tab_general_Sections {
			theme_information: DevKit.Controls.Section;
			theme_navigation: DevKit.Controls.Section;
			theme_ui_elements: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the Unified Interface secondary theme color to be used on the process control */
			AccentColor: DevKit.Controls.String;
			/** For internal use only. */
			BackgroundColor: DevKit.Controls.String;
			/** Choose the color that controls will use for borders */
			ControlBorder: DevKit.Controls.String;
			/** Choose the background color for controls to use to indicate when you hover over items */
			ControlShade: DevKit.Controls.String;
			/** Choose the default custom entity color if no color is assigned */
			DefaultCustomEntityColor: DevKit.Controls.String;
			/** Choose the default color for system entities if no color is assigned */
			DefaultEntityColor: DevKit.Controls.String;
			/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
			GlobalLinkColor: DevKit.Controls.String;
			/** Choose the color for title text, such as form tab labels */
			HeaderColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate hovered over items */
			HoverLinkEffect: DevKit.Controls.String;
			/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
			LogoId: DevKit.Controls.Lookup;
			/** Enter text that will be used as the tooltip and alt text for the logo. */
			LogoToolTip: DevKit.Controls.String;
			/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
			MainColor: DevKit.Controls.String;
			/** The name of the Theme Entity. */
			Name: DevKit.Controls.String;
			/** Choose the primary Navigation Bar background color */
			NavBarBackgroundColor: DevKit.Controls.String;
			/** Choose the secondary Navigation Bar background color */
			NavBarShelfColor: DevKit.Controls.String;
			/** Choose the page header background color */
			PageHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the panel header background color */
			PanelHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the primary background color for process controls */
			ProcessControlColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate selected items */
			SelectedLinkEffect: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTheme extends DevKit.IForm {
		/**
		* Theme [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Theme */
		Body: DevKit.FormTheme.Body;
		/** The Process of form Theme */
		Process: DevKit.FormTheme.Process;
		/** The SidePanes of form Theme */
		SidePanes: DevKit.SidePanes;
	}
	class ThemeApi {
		/**
		* DynamicsCrm.DevKit ThemeApi
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
		/** Choose the Unified Interface secondary theme color to be used on the process control */
		AccentColor: string;
		/** For internal use only. */
		BackgroundColor: string;
		/** Choose the color that controls will use for borders */
		ControlBorder: string;
		/** Choose the background color for controls to use to indicate when you hover over items */
		ControlShade: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Choose the default custom entity color if no color is assigned */
		DefaultCustomEntityColor: string;
		/** Choose the default color for system entities if no color is assigned */
		DefaultEntityColor: string;
		/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
		GlobalLinkColor: string;
		/** Choose the color for title text, such as form tab labels */
		HeaderColor: string;
		/** Choose the color that commands or lists will use to indicate hovered over items */
		HoverLinkEffect: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Default status of theme. */
		IsDefaultTheme: boolean;
		/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
		LogoId: string;
		/** Enter text that will be used as the tooltip and alt text for the logo. */
		LogoToolTip: string;
		/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
		MainColor: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the Theme Entity. */
		Name: string;
		/** Choose the primary Navigation Bar background color */
		NavBarBackgroundColor: string;
		/** Choose the secondary Navigation Bar background color */
		NavBarShelfColor: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Choose the page header background color */
		PageHeaderBackgroundColor: string;
		/** Choose the panel header background color */
		PanelHeaderBackgroundColor: string;
		/** Choose the primary background color for process controls */
		ProcessControlColor: string;
		/** Choose the color that commands or lists will use to indicate selected items */
		SelectedLinkEffect: string;
		/** Status of the Theme */
		readonly statecode: OptionSet.Theme.statecode;
		/** Reason for the status of the Theme */
		statuscode: OptionSet.Theme.statuscode;
		/** Unique identifier for entity instances */
		ThemeId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Define type of theme. */
		Type: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Choose the Unified Interface secondary theme color to be used on the process control */
			readonly AccentColor: string;
			/** For internal use only. */
			readonly BackgroundColor: string;
			/** Choose the color that controls will use for borders */
			readonly ControlBorder: string;
			/** Choose the background color for controls to use to indicate when you hover over items */
			readonly ControlShade: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Choose the default custom entity color if no color is assigned */
			readonly DefaultCustomEntityColor: string;
			/** Choose the default color for system entities if no color is assigned */
			readonly DefaultEntityColor: string;
			/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
			readonly GlobalLinkColor: string;
			/** Choose the color for title text, such as form tab labels */
			readonly HeaderColor: string;
			/** Choose the color that commands or lists will use to indicate hovered over items */
			readonly HoverLinkEffect: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Default status of theme. */
			readonly IsDefaultTheme: string;
			/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
			readonly LogoId: string;
			/** Enter text that will be used as the tooltip and alt text for the logo. */
			readonly LogoToolTip: string;
			/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
			readonly MainColor: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the Theme Entity. */
			readonly Name: string;
			/** Choose the primary Navigation Bar background color */
			readonly NavBarBackgroundColor: string;
			/** Choose the secondary Navigation Bar background color */
			readonly NavBarShelfColor: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Choose the page header background color */
			readonly PageHeaderBackgroundColor: string;
			/** Choose the panel header background color */
			readonly PanelHeaderBackgroundColor: string;
			/** Choose the primary background color for process controls */
			readonly ProcessControlColor: string;
			/** Choose the color that commands or lists will use to indicate selected items */
			readonly SelectedLinkEffect: string;
			/** Status of the Theme */
			readonly statecode: string;
			/** Reason for the status of the Theme */
			readonly statuscode: string;
			/** Unique identifier for entity instances */
			readonly ThemeId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Define type of theme. */
			readonly Type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Theme {
		enum statecode {
			/** 0 */
			Custom,
			/** 1 */
			System
		}
		enum statuscode {
			/** 1 */
			Custom,
			/** 2 */
			System
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