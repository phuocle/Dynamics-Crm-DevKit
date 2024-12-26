//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_generalstyles_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_bordercolor: DevKit.Controls.String;
			msdyncrm_bordercolor1: DevKit.Controls.String;
			msdyncrm_bordersize: DevKit.Controls.String;
			msdyncrm_bordersize1: DevKit.Controls.String;
			msdyncrm_borderstyle: DevKit.Controls.String;
			msdyncrm_borderstyle1: DevKit.Controls.String;
			msdyncrm_buttoncolor: DevKit.Controls.String;
			msdyncrm_dividercolor: DevKit.Controls.String;
			msdyncrm_dividerlinestyle: DevKit.Controls.String;
			msdyncrm_dividersize: DevKit.Controls.String;
			/** The colors present in the email body */
			msdyncrm_emailcolorpalette: DevKit.Controls.String;
			msdyncrm_emailwidth: DevKit.Controls.String;
			msdyncrm_font: DevKit.Controls.String;
			msdyncrm_fontsize: DevKit.Controls.String;
			msdyncrm_heading1color: DevKit.Controls.String;
			msdyncrm_heading1font: DevKit.Controls.String;
			msdyncrm_heading1size: DevKit.Controls.String;
			msdyncrm_heading2color: DevKit.Controls.String;
			msdyncrm_heading2font: DevKit.Controls.String;
			msdyncrm_heading2size: DevKit.Controls.String;
			msdyncrm_heading3color: DevKit.Controls.String;
			msdyncrm_heading3font: DevKit.Controls.String;
			msdyncrm_heading3size: DevKit.Controls.String;
			msdyncrm_innerbackgroundcolor: DevKit.Controls.String;
			msdyncrm_lineheight: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_outerbackgroundcolor: DevKit.Controls.String;
			msdyncrm_paragraphcolor: DevKit.Controls.String;
			msdyncrm_paragraphfont: DevKit.Controls.String;
			msdyncrm_paragraphsize: DevKit.Controls.String;
			msdyncrm_plaintextfullwidth: DevKit.Controls.Boolean;
			msdyncrm_roundedcorners: DevKit.Controls.String;
			msdyncrm_textdecoration: DevKit.Controls.String;
			msdyncrm_textfontweight: DevKit.Controls.String;
			msdyncrm_textitalicstyle: DevKit.Controls.String;
			msdyncrm_textlinkfontweight: DevKit.Controls.String;
			msdyncrm_textlinkitalicstyle: DevKit.Controls.String;
			msdyncrm_textlinkstylecolor: DevKit.Controls.String;
			msdyncrm_textlinktextdecoration: DevKit.Controls.String;
			msdyncrm_textstylecolor: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_generalstyles_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_generalstyles_Information */
		Body: DevKit.Formmsdyncrm_generalstyles_Information.Body;
		/** The Navigation of form msdyncrm_generalstyles_Information */
		Navigation: DevKit.Formmsdyncrm_generalstyles_Information.Navigation;
		/** The SidePanes of form msdyncrm_generalstyles_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_generalstylesApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_generalstylesApi
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
		msdyncrm_bordercolor: string;
		msdyncrm_bordersize: string;
		msdyncrm_borderstyle: string;
		msdyncrm_buttoncolor: string;
		msdyncrm_dividercolor: string;
		msdyncrm_dividerlinestyle: string;
		msdyncrm_dividersize: string;
		msdyncrm_dividerstyle: OptionSet.msdyncrm_generalstyles.msdyncrm_dividerstyle;
		/** The colors present in the email body */
		msdyncrm_emailcolorpalette: string;
		msdyncrm_emailwidth: string;
		msdyncrm_font: string;
		msdyncrm_fontsize: string;
		/** Unique identifier for entity instances */
		msdyncrm_generalstylesId: string;
		msdyncrm_heading1color: string;
		msdyncrm_heading1font: string;
		msdyncrm_heading1size: string;
		msdyncrm_heading2color: string;
		msdyncrm_heading2font: string;
		msdyncrm_heading2size: string;
		msdyncrm_heading3color: string;
		msdyncrm_heading3font: string;
		msdyncrm_heading3size: string;
		msdyncrm_innerbackgroundcolor: string;
		msdyncrm_lineheight: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_outerbackgroundcolor: string;
		msdyncrm_paragraphcolor: string;
		msdyncrm_paragraphfont: string;
		msdyncrm_paragraphsize: string;
		msdyncrm_plaintextfullwidth: boolean;
		msdyncrm_roundedcorners: string;
		msdyncrm_textdecoration: string;
		msdyncrm_textfontweight: string;
		msdyncrm_textitalicstyle: string;
		msdyncrm_textlinkfontweight: string;
		msdyncrm_textlinkitalicstyle: string;
		msdyncrm_textlinkstylecolor: string;
		msdyncrm_textlinkstylefont: string;
		msdyncrm_textlinktextdecoration: string;
		msdyncrm_textstylecolor: string;
		msdyncrm_textstylefont: string;
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
		/** Status of the General styles */
		statecode: OptionSet.msdyncrm_generalstyles.statecode;
		/** Reason for the status of the General styles */
		statuscode: OptionSet.msdyncrm_generalstyles.statuscode;
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
			readonly msdyncrm_bordercolor: string;
			readonly msdyncrm_bordersize: string;
			readonly msdyncrm_borderstyle: string;
			readonly msdyncrm_buttoncolor: string;
			readonly msdyncrm_dividercolor: string;
			readonly msdyncrm_dividerlinestyle: string;
			readonly msdyncrm_dividersize: string;
			readonly msdyncrm_dividerstyle: string;
			/** The colors present in the email body */
			readonly msdyncrm_emailcolorpalette: string;
			readonly msdyncrm_emailwidth: string;
			readonly msdyncrm_font: string;
			readonly msdyncrm_fontsize: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_generalstylesId: string;
			readonly msdyncrm_heading1color: string;
			readonly msdyncrm_heading1font: string;
			readonly msdyncrm_heading1size: string;
			readonly msdyncrm_heading2color: string;
			readonly msdyncrm_heading2font: string;
			readonly msdyncrm_heading2size: string;
			readonly msdyncrm_heading3color: string;
			readonly msdyncrm_heading3font: string;
			readonly msdyncrm_heading3size: string;
			readonly msdyncrm_innerbackgroundcolor: string;
			readonly msdyncrm_lineheight: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_outerbackgroundcolor: string;
			readonly msdyncrm_paragraphcolor: string;
			readonly msdyncrm_paragraphfont: string;
			readonly msdyncrm_paragraphsize: string;
			readonly msdyncrm_plaintextfullwidth: string;
			readonly msdyncrm_roundedcorners: string;
			readonly msdyncrm_textdecoration: string;
			readonly msdyncrm_textfontweight: string;
			readonly msdyncrm_textitalicstyle: string;
			readonly msdyncrm_textlinkfontweight: string;
			readonly msdyncrm_textlinkitalicstyle: string;
			readonly msdyncrm_textlinkstylecolor: string;
			readonly msdyncrm_textlinkstylefont: string;
			readonly msdyncrm_textlinktextdecoration: string;
			readonly msdyncrm_textstylecolor: string;
			readonly msdyncrm_textstylefont: string;
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
			/** Status of the General styles */
			readonly statecode: string;
			/** Reason for the status of the General styles */
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
	namespace msdyncrm_generalstyles {
		enum msdyncrm_dividerstyle {
			/** 164230003 */
			Dashed,
			/** 164230002 */
			Dotted,
			/** 164230004 */
			Double,
			/** 164230000 */
			None,
			/** 164230001 */
			Solid
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