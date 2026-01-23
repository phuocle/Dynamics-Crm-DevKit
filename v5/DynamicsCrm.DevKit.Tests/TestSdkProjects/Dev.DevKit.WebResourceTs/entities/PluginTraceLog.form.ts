/**
 * PluginTraceLog.form.ts - PluginTraceLog Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PluginTraceLog containing form classes: PluginTraceLog.FormClassName
 * 3. Aggregate Form class: PluginTraceLog.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PluginTraceLog {

	// ========================================================================
	// Form: PluginTraceLog_Information
	// ========================================================================

	export namespace PluginTraceLog_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unsecured configuration for the plug-in trace log. */
			Configuration: DevKit.Controls.Memo;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			CorrelationId: DevKit.Controls.String;
			/** Depth of execution of the plug-in or custom workflow activity. */
			Depth: DevKit.Controls.Integer;
			/** Details of the exception. */
			ExceptionDetails: DevKit.Controls.Memo;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			IsSystemCreated: DevKit.Controls.Boolean;
			/** Trace text from the plug-in. */
			MessageBlock: DevKit.Controls.Memo;
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of execution. */
			Mode: DevKit.Controls.OptionSet;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionDuration: DevKit.Controls.Integer;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionStartTime: DevKit.Controls.DateTime;
			/** Asynchronous workflow persistence key. */
			PersistenceKey: DevKit.Controls.String;
			/** ID of the plug-in registration step. */
			PluginStepId: DevKit.Controls.String;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
			/** Unique identifier of the message request. */
			RequestId: DevKit.Controls.String;
			/** Secured configuration for the plug-in trace log. */
			SecureConfiguration: DevKit.Controls.Memo;
			/** Class name of the plug-in. */
			TypeName: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
		}

		export interface IConfigurationTabSections {
			/** Context */
			Configuration_Context: DevKit.Controls.Section;
			/** General */
			Configuration_General: DevKit.Controls.Section;
		}

		export interface IExecutionTabSections {
			/** Performance */
			Execution_Performance: DevKit.Controls.Section;
		}

		/** Configuration */
		export interface IConfigurationTab extends DevKit.Controls.ITab {
			Section: IConfigurationTabSections;
		}

		/** Execution */
		export interface IExecutionTab extends DevKit.Controls.ITab {
			Section: IExecutionTabSections;
		}

		export interface ITabs {
			/** Configuration */
			Configuration: IConfigurationTab;
			/** Execution */
			Execution: IExecutionTab;
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
	 * PluginTraceLog_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new PluginTraceLog.PluginTraceLog_Information(executionContext)
	 */
	export class PluginTraceLog_Information extends FormBase<PluginTraceLog_Information.IBody, PluginTraceLog_Information.IHeader, PluginTraceLog_Information.IGrid, PluginTraceLog_Information.INavigation, PluginTraceLog_Information.IQuickForm, PluginTraceLog_Information.IProcess, PluginTraceLog_Information.IDialog> {
		/**
		 * Creates a PluginTraceLog_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Configuration', 'CorrelationId', 'Depth', 'ExceptionDetails', 'IsSystemCreated', 'MessageBlock', 'MessageName', 'Mode', 'OperationType', 'PerformanceExecutionDuration', 'PerformanceExecutionStartTime', 'PersistenceKey', 'PluginStepId', 'PrimaryEntity', 'RequestId', 'SecureConfiguration', 'TypeName'],
				header: ['MessageName', 'OperationType', 'PrimaryEntity'],
				tab: ['Configuration___Configuration_Context', 'Configuration___Configuration_General', 'Execution___Execution_Performance'],
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
			/** Unsecured configuration for the plug-in trace log. */
			Configuration: DevKit.Controls.Memo;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			CorrelationId: DevKit.Controls.String;
			/** Depth of execution of the plug-in or custom workflow activity. */
			Depth: DevKit.Controls.Integer;
			/** Details of the exception. */
			ExceptionDetails: DevKit.Controls.Memo;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			IsSystemCreated: DevKit.Controls.Boolean;
			/** Trace text from the plug-in. */
			MessageBlock: DevKit.Controls.Memo;
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of execution. */
			Mode: DevKit.Controls.OptionSet;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionDuration: DevKit.Controls.Integer;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionStartTime: DevKit.Controls.DateTime;
			/** Asynchronous workflow persistence key. */
			PersistenceKey: DevKit.Controls.String;
			/** ID of the plug-in registration step. */
			PluginStepId: DevKit.Controls.String;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
			/** Unique identifier of the message request. */
			RequestId: DevKit.Controls.String;
			/** Secured configuration for the plug-in trace log. */
			SecureConfiguration: DevKit.Controls.Memo;
			/** Class name of the plug-in. */
			TypeName: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
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
	 * Usage: new PluginTraceLog.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PluginTraceLog Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Configuration', 'CorrelationId', 'Depth', 'ExceptionDetails', 'IsSystemCreated', 'MessageBlock', 'MessageName', 'Mode', 'OperationType', 'PerformanceExecutionDuration', 'PerformanceExecutionStartTime', 'PersistenceKey', 'PluginStepId', 'PrimaryEntity', 'RequestId', 'SecureConfiguration', 'TypeName'],
				header: ['MessageName', 'OperationType', 'PrimaryEntity'],
				tab: ['Configuration___Configuration_Context', 'Configuration___Configuration_General', 'Execution___Execution_Performance'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
