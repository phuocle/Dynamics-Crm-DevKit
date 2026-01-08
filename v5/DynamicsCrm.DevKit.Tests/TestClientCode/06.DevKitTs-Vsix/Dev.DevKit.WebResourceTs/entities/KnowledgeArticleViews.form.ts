/**
 * KnowledgeArticleViews.form.ts - KnowledgeArticleViews Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KnowledgeArticleViews containing form classes: KnowledgeArticleViews.FormClassName
 * 3. Aggregate Form class: KnowledgeArticleViews.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KnowledgeArticleViews {

	// ========================================================================
	// Form: KnowledgeArticleViews
	// ========================================================================

	export namespace KnowledgeArticleViews {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Shows where the knowledge was used */
			Location: DevKit.Controls.OptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Controls.DateOnly;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ITabs {
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
	 * KnowledgeArticleViews Form class
	 * Provides typed access to all form controls
	 * Usage: new KnowledgeArticleViews.KnowledgeArticleViews(executionContext)
	 */
	export class KnowledgeArticleViews extends FormBase<KnowledgeArticleViews.IBody, KnowledgeArticleViews.IHeader, KnowledgeArticleViews.IGrid, KnowledgeArticleViews.INavigation, KnowledgeArticleViews.IQuickForm, KnowledgeArticleViews.IProcess, KnowledgeArticleViews.IDialog> {
		/**
		 * Creates a KnowledgeArticleViews Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['KnowledgeArticleView', 'Location', 'ViewDate'],
				header: [],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: KnowledgeArticleViews_MainInteractionCentric
	// ========================================================================

	export namespace KnowledgeArticleViews_MainInteractionCentric {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Shows where the knowledge was used */
			Location: DevKit.Controls.OptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Controls.DateOnly;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ITabs {
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
	 * KnowledgeArticleViews_MainInteractionCentric Form class
	 * Provides typed access to all form controls
	 * Usage: new KnowledgeArticleViews.KnowledgeArticleViews_MainInteractionCentric(executionContext)
	 */
	export class KnowledgeArticleViews_MainInteractionCentric extends FormBase<KnowledgeArticleViews_MainInteractionCentric.IBody, KnowledgeArticleViews_MainInteractionCentric.IHeader, KnowledgeArticleViews_MainInteractionCentric.IGrid, KnowledgeArticleViews_MainInteractionCentric.INavigation, KnowledgeArticleViews_MainInteractionCentric.IQuickForm, KnowledgeArticleViews_MainInteractionCentric.IProcess, KnowledgeArticleViews_MainInteractionCentric.IDialog> {
		/**
		 * Creates a KnowledgeArticleViews_MainInteractionCentric Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['KnowledgeArticleView', 'Location', 'ViewDate'],
				header: [],
				tab: [],
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
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Shows where the knowledge was used */
			Location: DevKit.Controls.OptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Controls.DateOnly;
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
	 * Usage: new KnowledgeArticleViews.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KnowledgeArticleViews Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['KnowledgeArticleView', 'Location', 'ViewDate'],
				header: [],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
