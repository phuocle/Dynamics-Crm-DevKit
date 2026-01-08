/**
 * MCPTool.form.ts - MCPTool Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MCPTool containing form classes: MCPTool.FormClassName
 * 3. Aggregate Form class: MCPTool.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MCPTool {

	// ========================================================================
	// Form: McpTool_Main_Form
	// ========================================================================

	export namespace McpTool_Main_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Annotations for the MCP Tool */
			Annotations: DevKit.Controls.Memo;
			/** Backend Tool Type */
			BackendToolType: DevKit.Controls.OptionSet;
			/** Connector ID */
			ConnectorId: DevKit.Controls.String;
			/** Reference to the Custom API */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Description of the MCP Tool */
			Description: DevKit.Controls.Memo;
			/** HTTP Method */
			HTTPMethod: DevKit.Controls.OptionSet;
			/** Input Schema of the MCP Tool */
			InputSchema: DevKit.Controls.Memo;
			/** The associated MCP Server */
			MCPServerId: DevKit.Controls.Lookup;
			/** Name of the MCP Tool */
			Name: DevKit.Controls.String;
			/** Operation Id of the associated MCP Tool.  */
			OperationId: DevKit.Controls.String;
			/** Relative Path */
			RelativePath: DevKit.Controls.String;
			/** Reference to the SDK Message Pair API */
			SdkMessagePairId: DevKit.Controls.Lookup;
			/** Title of the MCP Tool */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface INew_TabTabSections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}

		/** New Tab */
		export interface INew_TabTab extends DevKit.Controls.ITab {
			Section: INew_TabTabSections;
		}

		export interface ITabs {
			/** New Tab */
			New_Tab: INew_TabTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * McpTool_Main_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new MCPTool.McpTool_Main_Form(executionContext)
	 */
	export class McpTool_Main_Form extends FormBase<McpTool_Main_Form.IBody, McpTool_Main_Form.IHeader, McpTool_Main_Form.IGrid, McpTool_Main_Form.INavigation, McpTool_Main_Form.IQuickForm, McpTool_Main_Form.IProcess, McpTool_Main_Form.IDialog> {
		/**
		 * Creates a McpTool_Main_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Annotations', 'BackendToolType', 'ConnectorId', 'CustomAPIId', 'Description', 'HTTPMethod', 'InputSchema', 'MCPServerId', 'Name', 'OperationId', 'RelativePath', 'SdkMessagePairId', 'Title'],
				header: [],
				tab: ['New_Tab___New_Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
			/** Annotations for the MCP Tool */
			Annotations: DevKit.Controls.Memo;
			/** Backend Tool Type */
			BackendToolType: DevKit.Controls.OptionSet;
			/** Connector ID */
			ConnectorId: DevKit.Controls.String;
			/** Reference to the Custom API */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Description of the MCP Tool */
			Description: DevKit.Controls.Memo;
			/** HTTP Method */
			HTTPMethod: DevKit.Controls.OptionSet;
			/** Input Schema of the MCP Tool */
			InputSchema: DevKit.Controls.Memo;
			/** The associated MCP Server */
			MCPServerId: DevKit.Controls.Lookup;
			/** Name of the MCP Tool */
			Name: DevKit.Controls.String;
			/** Operation Id of the associated MCP Tool.  */
			OperationId: DevKit.Controls.String;
			/** Relative Path */
			RelativePath: DevKit.Controls.String;
			/** Reference to the SDK Message Pair API */
			SdkMessagePairId: DevKit.Controls.Lookup;
			/** Title of the MCP Tool */
			Title: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new MCPTool.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MCPTool Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Annotations', 'BackendToolType', 'ConnectorId', 'CustomAPIId', 'Description', 'HTTPMethod', 'InputSchema', 'MCPServerId', 'Name', 'OperationId', 'RelativePath', 'SdkMessagePairId', 'Title'],
				header: [],
				tab: ['New Tab___New Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
