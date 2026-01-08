/**
 * MCPServer.form.ts - MCPServer Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace MCPServer containing form classes: MCPServer.FormClassName
 * 3. Aggregate Form class: MCPServer.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace MCPServer {

	// ========================================================================
	// Form: MCPServer_Main_Form
	// ========================================================================

	export namespace MCPServer_Main_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Audience associated with the MCP Server. */
			Audience: DevKit.Controls.String;
			/** Configurations for the MCP Server */
			Configuration: DevKit.Controls.Memo;
			/** Description of the MCP Server */
			Description: DevKit.Controls.Memo;
			/** DisplayName of the MCP Server */
			DisplayName: DevKit.Controls.String;
			/** Instructions for the MCP Server */
			Instructions: DevKit.Controls.Memo;
			/** Denotes if this MCP server proxies another remote MCP server or not */
			IsRemote: DevKit.Controls.Boolean;
			/** Name of the MCP Server */
			Name: DevKit.Controls.String;
			/** Relative Path */
			RelativePath: DevKit.Controls.String;
			/** Scopes needed for the MCP Server. */
			Scope: DevKit.Controls.String;
			/** The type of server */
			ServerType: DevKit.Controls.OptionSet;
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
	 * MCPServer_Main_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new MCPServer.MCPServer_Main_Form(executionContext)
	 */
	export class MCPServer_Main_Form extends FormBase<MCPServer_Main_Form.IBody, MCPServer_Main_Form.IHeader, MCPServer_Main_Form.IGrid, MCPServer_Main_Form.INavigation, MCPServer_Main_Form.IQuickForm, MCPServer_Main_Form.IProcess, MCPServer_Main_Form.IDialog> {
		/**
		 * Creates a MCPServer_Main_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Audience', 'Configuration', 'Description', 'DisplayName', 'Instructions', 'IsRemote', 'Name', 'RelativePath', 'Scope', 'ServerType'],
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
			/** Audience associated with the MCP Server. */
			Audience: DevKit.Controls.String;
			/** Configurations for the MCP Server */
			Configuration: DevKit.Controls.Memo;
			/** Description of the MCP Server */
			Description: DevKit.Controls.Memo;
			/** DisplayName of the MCP Server */
			DisplayName: DevKit.Controls.String;
			/** Instructions for the MCP Server */
			Instructions: DevKit.Controls.Memo;
			/** Denotes if this MCP server proxies another remote MCP server or not */
			IsRemote: DevKit.Controls.Boolean;
			/** Name of the MCP Server */
			Name: DevKit.Controls.String;
			/** Relative Path */
			RelativePath: DevKit.Controls.String;
			/** Scopes needed for the MCP Server. */
			Scope: DevKit.Controls.String;
			/** The type of server */
			ServerType: DevKit.Controls.OptionSet;
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
	 * Usage: new MCPServer.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate MCPServer Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Audience', 'Configuration', 'Description', 'DisplayName', 'Instructions', 'IsRemote', 'Name', 'RelativePath', 'Scope', 'ServerType'],
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
