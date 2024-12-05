//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustom_Link_Popup {
		interface Tabs {
		}
		interface Body {
			msdynmkt_alias: DevKit.Controls.ActionCards;
			msdynmkt_buttontext: DevKit.Controls.ActionCards;
			msdynmkt_linkto: DevKit.Controls.String;
			msdynmkt_target: DevKit.Controls.OptionSet;
			msdynmkt_tracking: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class FormCustom_Link_Popup extends DevKit.IForm {
		/**
		* Custom Link Popup [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Custom_Link_Popup */
		Body: DevKit.FormCustom_Link_Popup.Body;
		/** The Navigation of form Custom_Link_Popup */
		Navigation: DevKit.FormCustom_Link_Popup.Navigation;
		/** The SidePanes of form Custom_Link_Popup */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormHTML_Link_Popup {
		interface Tabs {
		}
		interface Body {
			msdynmkt_alias: DevKit.Controls.ActionCards;
			msdynmkt_linkto: DevKit.Controls.String;
			msdynmkt_target: DevKit.Controls.OptionSet;
			msdynmkt_tracking: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class FormHTML_Link_Popup extends DevKit.IForm {
		/**
		* HTML Link Popup [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form HTML_Link_Popup */
		Body: DevKit.FormHTML_Link_Popup.Body;
		/** The Navigation of form HTML_Link_Popup */
		Navigation: DevKit.FormHTML_Link_Popup.Navigation;
		/** The SidePanes of form HTML_Link_Popup */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_buttonstyle_Information {
		interface Tabs {
		}
		interface Body {
			msdynmkt_alias: DevKit.Controls.ActionCards;
			msdynmkt_alignment: DevKit.Controls.String;
			msdynmkt_bordercolor: DevKit.Controls.String;
			msdynmkt_bordersize: DevKit.Controls.String;
			msdynmkt_borderstyle: DevKit.Controls.String;
			msdynmkt_buttoncolor: DevKit.Controls.String;
			msdynmkt_buttontext: DevKit.Controls.ActionCards;
			/** The colors present in the email body */
			msdynmkt_emailcolorpalette: DevKit.Controls.String;
			msdynmkt_fittotext: DevKit.Controls.Boolean;
			msdynmkt_fontfamily: DevKit.Controls.String;
			msdynmkt_fontitalicstyle: DevKit.Controls.String;
			msdynmkt_fontsize: DevKit.Controls.String;
			msdynmkt_fontweight: DevKit.Controls.String;
			msdynmkt_height: DevKit.Controls.String;
			msdynmkt_linkto: DevKit.Controls.String;
			msdynmkt_marginbottom: DevKit.Controls.String;
			msdynmkt_marginleft: DevKit.Controls.String;
			msdynmkt_marginright: DevKit.Controls.String;
			msdynmkt_margintop: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_paddingbottom: DevKit.Controls.String;
			msdynmkt_paddingleft: DevKit.Controls.String;
			msdynmkt_paddingright: DevKit.Controls.String;
			msdynmkt_paddingtop: DevKit.Controls.String;
			msdynmkt_roundedcorners: DevKit.Controls.String;
			msdynmkt_target: DevKit.Controls.OptionSet;
			msdynmkt_textdecoration: DevKit.Controls.String;
			msdynmkt_textstylecolor: DevKit.Controls.String;
			msdynmkt_tracking: DevKit.Controls.Boolean;
			msdynmkt_verticalalign: DevKit.Controls.String;
			msdynmkt_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_buttonstyle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_buttonstyle_Information */
		Body: DevKit.Formmsdynmkt_buttonstyle_Information.Body;
		/** The Navigation of form msdynmkt_buttonstyle_Information */
		Navigation: DevKit.Formmsdynmkt_buttonstyle_Information.Navigation;
		/** The SidePanes of form msdynmkt_buttonstyle_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_buttonstyleApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_buttonstyleApi
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
		msdynmkt_alias: string;
		msdynmkt_aliasplaceholder: string;
		msdynmkt_alignment: string;
		msdynmkt_autowidth: boolean;
		msdynmkt_bordercolor: string;
		msdynmkt_bordersize: string;
		msdynmkt_borderstyle: string;
		msdynmkt_buttoncolor: string;
		/** Unique identifier for entity instances */
		msdynmkt_buttonstyleId: string;
		msdynmkt_buttontext: string;
		/** The colors present in the email body */
		msdynmkt_emailcolorpalette: string;
		msdynmkt_fittotext: boolean;
		msdynmkt_fontfamily: string;
		msdynmkt_fontitalicstyle: string;
		msdynmkt_fontsize: string;
		msdynmkt_fontweight: string;
		msdynmkt_friendlyname: string;
		msdynmkt_height: string;
		msdynmkt_linkto: string;
		msdynmkt_marginbottom: string;
		msdynmkt_marginleft: string;
		msdynmkt_marginright: string;
		msdynmkt_margintop: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_paddingbottom: string;
		msdynmkt_paddingleft: string;
		msdynmkt_paddingright: string;
		msdynmkt_paddingtop: string;
		msdynmkt_parentstatuscode: OptionSet.msdynmkt_buttonstyle.msdynmkt_parentstatuscode;
		msdynmkt_placeholders: string;
		msdynmkt_roundedcorners: string;
		msdynmkt_target: OptionSet.msdynmkt_buttonstyle.msdynmkt_target;
		msdynmkt_textdecoration: string;
		msdynmkt_textfontstyle: string;
		msdynmkt_textstylecolor: string;
		/** The colors set in the theme color palette */
		msdynmkt_themecolorpalette: string;
		msdynmkt_tracking: boolean;
		msdynmkt_verticalalign: string;
		msdynmkt_width: string;
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
		/** Status of the Button style */
		statecode: OptionSet.msdynmkt_buttonstyle.statecode;
		/** Reason for the status of the Button style */
		statuscode: OptionSet.msdynmkt_buttonstyle.statuscode;
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
			readonly msdynmkt_alias: string;
			readonly msdynmkt_aliasplaceholder: string;
			readonly msdynmkt_alignment: string;
			readonly msdynmkt_autowidth: string;
			readonly msdynmkt_bordercolor: string;
			readonly msdynmkt_bordersize: string;
			readonly msdynmkt_borderstyle: string;
			readonly msdynmkt_buttoncolor: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_buttonstyleId: string;
			readonly msdynmkt_buttontext: string;
			/** The colors present in the email body */
			readonly msdynmkt_emailcolorpalette: string;
			readonly msdynmkt_fittotext: string;
			readonly msdynmkt_fontfamily: string;
			readonly msdynmkt_fontitalicstyle: string;
			readonly msdynmkt_fontsize: string;
			readonly msdynmkt_fontweight: string;
			readonly msdynmkt_friendlyname: string;
			readonly msdynmkt_height: string;
			readonly msdynmkt_linkto: string;
			readonly msdynmkt_marginbottom: string;
			readonly msdynmkt_marginleft: string;
			readonly msdynmkt_marginright: string;
			readonly msdynmkt_margintop: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_paddingbottom: string;
			readonly msdynmkt_paddingleft: string;
			readonly msdynmkt_paddingright: string;
			readonly msdynmkt_paddingtop: string;
			readonly msdynmkt_parentstatuscode: string;
			readonly msdynmkt_placeholders: string;
			readonly msdynmkt_roundedcorners: string;
			readonly msdynmkt_target: string;
			readonly msdynmkt_textdecoration: string;
			readonly msdynmkt_textfontstyle: string;
			readonly msdynmkt_textstylecolor: string;
			/** The colors set in the theme color palette */
			readonly msdynmkt_themecolorpalette: string;
			readonly msdynmkt_tracking: string;
			readonly msdynmkt_verticalalign: string;
			readonly msdynmkt_width: string;
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
			/** Status of the Button style */
			readonly statecode: string;
			/** Reason for the status of the Button style */
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
	namespace msdynmkt_buttonstyle {
		enum msdynmkt_parentstatuscode {
			/** 1 */
			Draft,
			/** 100 */
			Inactive,
			/** 3 */
			Live_editing,
			/** 2 */
			Ready_to_send
		}
		enum msdynmkt_target {
			/** 164230001 */
			_blank,
			/** 164230002 */
			_parent,
			/** 164230000 */
			_self,
			/** 164230003 */
			_top
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}