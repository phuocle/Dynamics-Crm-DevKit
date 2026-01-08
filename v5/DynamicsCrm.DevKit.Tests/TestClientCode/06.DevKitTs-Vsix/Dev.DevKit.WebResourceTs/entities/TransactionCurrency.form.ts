/**
 * TransactionCurrency.form.ts - TransactionCurrency Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace TransactionCurrency containing form classes: TransactionCurrency.FormClassName
 * 3. Aggregate Form class: TransactionCurrency.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace TransactionCurrency {

	// ========================================================================
	// Form: TransactionCurrency_Information
	// ========================================================================

	export namespace TransactionCurrency_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Controls.String;
			/** Name of the transaction currency. */
			CurrencyName1: DevKit.Controls.String;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision1: DevKit.Controls.Integer;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Controls.String;
			/** Symbol for the transaction currency. */
			CurrencySymbol1: DevKit.Controls.String;
			/** Currency type that can be used for new currency. */
			CurrencyType: DevKit.Controls.OptionSet;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate1: DevKit.Controls.Decimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Controls.String;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode1: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
			systemcurrency_uci: DevKit.Controls.ActionCards;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ILegacy_tabTabSections {
			/** Currency Conversion */
			Currency_conversion: DevKit.Controls.Section;
			/** Select Base Currency */
			Select_Base_Currency: DevKit.Controls.Section;
			/** Transaction Currency Information */
			Transaction_currency_information: DevKit.Controls.Section;
		}

		export interface IUCI_tabTabSections {
			/** Currency Details */
			CurrencyInformation: DevKit.Controls.Section;
			/** General Section */
			General: DevKit.Controls.Section;
		}

		/** General */
		export interface ILegacy_tabTab extends DevKit.Controls.ITab {
			Section: ILegacy_tabTabSections;
		}

		/** General */
		export interface IUCI_tabTab extends DevKit.Controls.ITab {
			Section: IUCI_tabTabSections;
		}

		export interface ITabs {
			/** General */
			Legacy_tab: ILegacy_tabTab;
			/** General */
			UCI_tab: IUCI_tabTab;
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
	 * TransactionCurrency_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new TransactionCurrency.TransactionCurrency_Information(executionContext)
	 */
	export class TransactionCurrency_Information extends FormBase<TransactionCurrency_Information.IBody, TransactionCurrency_Information.IHeader, TransactionCurrency_Information.IGrid, TransactionCurrency_Information.INavigation, TransactionCurrency_Information.IQuickForm, TransactionCurrency_Information.IProcess, TransactionCurrency_Information.IDialog> {
		/**
		 * Creates a TransactionCurrency_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CurrencyName', 'CurrencyName1', 'CurrencyPrecision', 'CurrencyPrecision1', 'CurrencySymbol', 'CurrencySymbol1', 'CurrencyType', 'ExchangeRate', 'ExchangeRate1', 'ISOCurrencyCode', 'ISOCurrencyCode1', 'systemcurrency', 'systemcurrency_uci'],
				header: [],
				tab: ['Legacy_tab___Currency_conversion', 'Legacy_tab___Select_Base_Currency', 'Legacy_tab___Transaction_currency_information', 'UCI_tab___CurrencyInformation', 'UCI_tab___General'],
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
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Controls.String;
			/** Name of the transaction currency. */
			CurrencyName1: DevKit.Controls.String;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision1: DevKit.Controls.Integer;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Controls.String;
			/** Symbol for the transaction currency. */
			CurrencySymbol1: DevKit.Controls.String;
			/** Currency type that can be used for new currency. */
			CurrencyType: DevKit.Controls.OptionSet;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate1: DevKit.Controls.Decimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Controls.String;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode1: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
			systemcurrency_uci: DevKit.Controls.ActionCards;
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
	 * Usage: new TransactionCurrency.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate TransactionCurrency Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CurrencyName', 'CurrencyName1', 'CurrencyPrecision', 'CurrencyPrecision1', 'CurrencySymbol', 'CurrencySymbol1', 'CurrencyType', 'ExchangeRate', 'ExchangeRate1', 'ISOCurrencyCode', 'ISOCurrencyCode1', 'systemcurrency', 'systemcurrency_uci'],
				header: [],
				tab: ['Legacy_tab___Currency conversion', 'Legacy_tab___Select Base Currency', 'Legacy_tab___Transaction currency information', 'UCI_tab___CurrencyInformation', 'UCI_tab___General'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
