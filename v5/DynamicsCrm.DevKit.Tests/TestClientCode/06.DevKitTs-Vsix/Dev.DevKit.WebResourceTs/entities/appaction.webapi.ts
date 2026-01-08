/**
 * appaction.webapi.ts - appaction WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for appaction
 * All fields return string representation of their values
 */
export interface IappactionFormattedValue {
	readonly appactionId: string;
	readonly AppModuleId: string;
	readonly ButtonAccessibilityText: string;
	readonly ButtonLabelText: string;
	readonly ButtonSequencePriority: string;
	readonly ButtonTooltipDescription: string;
	readonly ButtonTooltipTitle: string;
	readonly ClientType: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly Context: string;
	readonly ContextEntity: string;
	readonly ContextValue: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly FontIcon: string;
	readonly GroupTitle: string;
	readonly Hidden: string;
	readonly IconWebResourceId: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsDisabled: string;
	readonly isGroupTitleHidden: string;
	readonly IsManaged: string;
	readonly Location: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OnClickEventFormulaComponentLibrary: string;
	readonly OnClickEventFormulaComponentLibraryId: string;
	readonly OnClickEventFormulaComponentName: string;
	readonly OnClickEventFormulaFunctionName: string;
	readonly OnClickEventJavaScriptFunctionName: string;
	readonly OnClickEventJavaScriptParameters: string;
	readonly OnClickEventJavaScriptWebResourceId: string;
	readonly OnClickEventType: string;
	readonly OrganizationId: string;
	readonly Origin: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ParentAppActionId: string;
	readonly Sequence: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Type: string;
	readonly UniqueName: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly VisibilityFormulaComponentLibrary: string;
	readonly VisibilityFormulaComponentLibraryId: string;
	readonly VisibilityFormulaComponentName: string;
	readonly VisibilityFormulaFunctionName: string;
	readonly VisibilityType: string;
}

/**
 * appaction WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IappactionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IappactionFormattedValue;
	/** Unique identifier for entity instances */
	appactionId: DevKit.Guid | null;
	/** Unique identifier for AppModule associated with Modern Command */
	AppModuleId: DevKit.Guid | null;
	/** Accessibility Text for Modern Command Button */
	ButtonAccessibilityText: string | null;
	/** Label Text renders for Modern Command Button */
	ButtonLabelText: string | null;
	/** Order of the Modern Command Button (Depreciated) */
	ButtonSequencePriority: number | null;
	/** Tooltip Description for Modern Command Button */
	ButtonTooltipDescription: string | null;
	/** Tooltip Title for Modern Command Button */
	ButtonTooltipTitle: string | null;
	/** Client Type associated with Modern Command */
	ClientType: Array<number> | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Context scope associated with Modern Command */
	Context: number | null;
	/** Context Entity associated with Modern Command */
	ContextEntity: DevKit.Guid | null;
	/** Context Name associated with Modern Command */
	ContextValue: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Font Icon for Modern Command Button */
	FontIcon: string | null;
	/** Group Title for Modern Command Group Button */
	GroupTitle: string | null;
	/** Hidden */
	Hidden: boolean | null;
	/** Unique identifier of the Icon Webresource from Webresource entity which used by the associated Modern Command */
	IconWebResourceId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Flag indicates the Modern Command Button is disabled for end user usage i.e. ribbon equivalent will be shown */
	IsDisabled: boolean | null;
	/** Flag indicates the Modern Command Group Button Title is hidden */
	isGroupTitleHidden: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Location of the Command bar associated with the Modern Command. */
	Location: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the AppAction entity. */
	name: string | null;
	/** Name of the Component Library where FX Action stored. */
	OnClickEventFormulaComponentLibrary: string | null;
	/** Unique identifier of the Component Library associated with Modern Command. */
	OnClickEventFormulaComponentLibraryId: DevKit.Guid | null;
	/** Name of the Component for FX Modern Command. */
	OnClickEventFormulaComponentName: string | null;
	/** Name of the Function for FX Modern Command. */
	OnClickEventFormulaFunctionName: string | null;
	/** Name of the Function for JS Modern Command. */
	OnClickEventJavaScriptFunctionName: string | null;
	/** Parameters of the Function for JS Modern Command. */
	OnClickEventJavaScriptParameters: string | null;
	/** Unique identifier of the JavaScript WebResource from the Webresource entity which used by associated JS Modern Command. */
	OnClickEventJavaScriptWebResourceId: DevKit.Guid | null;
	/** Type of Action associated with Modern Command. */
	OnClickEventType: number | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Origin of App Action. */
	Origin: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier for Parent Modern Command associated with Modern Command. */
	ParentAppActionId: DevKit.Guid | null;
	/** Order of the Modern Command to be Displayed. */
	Sequence: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the App Action */
	statecode: number | null;
	/** Reason for the status of the App Action */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Type of Modern Command Button */
	Type: number | null;
	/** Unique Name of the AppAction */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Name of the Component Library where FX Visible Rule stored associated with Modern Command. */
	VisibilityFormulaComponentLibrary: string | null;
	/** Unique identifier of the Component Library associated with Modern Command. */
	VisibilityFormulaComponentLibraryId: DevKit.Guid | null;
	/** Name of the Component for FX Visible Rule associated with Modern Command. */
	VisibilityFormulaComponentName: string | null;
	/** Name of the Function for FX Visible Rule assoicated with Modern Command. */
	VisibilityFormulaFunctionName: string | null;
	/** Visibily Type of the Modern Command which should be either FX/Classic or None. */
	VisibilityType: number | null;
}

const appactionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	appactionId: { logicalName: 'appactionid' },
	AppModuleId: { schemaName: 'AppModuleId', logicalName: '_appmoduleid_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	ButtonAccessibilityText: { logicalName: 'buttonaccessibilitytext' },
	ButtonLabelText: { logicalName: 'buttonlabeltext' },
	ButtonSequencePriority: { logicalName: 'buttonsequencepriority', type: 'Number' },
	ButtonTooltipDescription: { logicalName: 'buttontooltipdescription' },
	ButtonTooltipTitle: { logicalName: 'buttontooltiptitle' },
	ClientType: { logicalName: 'clienttype', type: 'MultiOptionSet' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Context: { logicalName: 'context', type: 'Integer' },
	ContextEntity: { schemaName: 'ContextEntity', logicalName: '_contextentity_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	ContextValue: { logicalName: 'contextvalue' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FontIcon: { logicalName: 'fonticon' },
	GroupTitle: { logicalName: 'grouptitle' },
	Hidden: { logicalName: 'hidden', type: 'Boolean' },
	IconWebResourceId: { schemaName: 'IconWebResourceId', logicalName: '_iconwebresourceid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDisabled: { logicalName: 'isdisabled', type: 'Boolean' },
	isGroupTitleHidden: { logicalName: 'isgrouptitlehidden', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Location: { logicalName: 'location', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OnClickEventFormulaComponentLibrary: { logicalName: 'onclickeventformulacomponentlibrary' },
	OnClickEventFormulaComponentLibraryId: { schemaName: 'OnClickEventFormulaComponentLibraryId', logicalName: '_onclickeventformulacomponentlibraryid_value', entityCollectionName: 'canvasapps', entityLogicalName: 'canvasapp' },
	OnClickEventFormulaComponentName: { logicalName: 'onclickeventformulacomponentname' },
	OnClickEventFormulaFunctionName: { logicalName: 'onclickeventformulafunctionname' },
	OnClickEventJavaScriptFunctionName: { logicalName: 'onclickeventjavascriptfunctionname' },
	OnClickEventJavaScriptParameters: { logicalName: 'onclickeventjavascriptparameters' },
	OnClickEventJavaScriptWebResourceId: { schemaName: 'OnClickEventJavaScriptWebResourceId', logicalName: '_onclickeventjavascriptwebresourceid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
	OnClickEventType: { logicalName: 'onclickeventtype', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Origin: { logicalName: 'origin', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentAppActionId: { schemaName: 'ParentAppActionId', logicalName: '_parentappactionid_value', entityCollectionName: 'appactions', entityLogicalName: 'appaction' },
	Sequence: { logicalName: 'sequence', type: 'Number' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Type: { logicalName: 'type', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	VisibilityFormulaComponentLibrary: { logicalName: 'visibilityformulacomponentlibrary' },
	VisibilityFormulaComponentLibraryId: { schemaName: 'VisibilityFormulaComponentLibraryId', logicalName: '_visibilityformulacomponentlibraryid_value', entityCollectionName: 'canvasapps', entityLogicalName: 'canvasapp' },
	VisibilityFormulaComponentName: { logicalName: 'visibilityformulacomponentname' },
	VisibilityFormulaFunctionName: { logicalName: 'visibilityformulafunctionname' },
	VisibilityType: { logicalName: 'visibilitytype', type: 'Integer' },
};

/**
 * appaction WebApi class for early-bound style coding
 * Usage: const appaction = new appactionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class appactionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IappactionApi>(entity, 'appaction', 'appactions', appactionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface appactionApi extends IappactionApi { }
