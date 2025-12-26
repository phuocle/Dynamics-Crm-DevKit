import { FormAccount_DevKitV4 } from './generator/Account.form';
import { TestControl } from './Account.Test02Control';
import { TestString } from './Account.Test24String';
import { TestMemo } from './Account.Test16Memo';
import { TestBoolean } from './Account.Test01Boolean';
import { TestInteger } from './Account.Test12Integer';
import { TestHeader } from './Account.Test10Header';
import { TestDecimal } from './Account.Test06Decimal';
import { TestDouble } from './Account.Test07Double';
import { TestMoney } from './Account.Test17Money';
import { TestLookup } from './Account.Test14Lookup';
import { TestLookup1 } from './Account.Test15Lookup1';
import { TestOptionSet } from './Account.Test20OptionSet';
import { TestMultiOptionSet } from './Account.Test18MultiOptionSet';
import { TestDateOnly } from './Account.Test04DateOnly';
import { TestDateTime } from './Account.Test05DateTime';
import { TestGrid } from './Account.Test09Grid';
import { TestQuickView } from './Account.Test22QuickView';
import { TestNavigationItem } from './Account.Test19NavigationItem';
import { TestExecutionContext } from './Account.Test08ExecutionContext';
import { TestSidePanes } from './Account.Test23SidePanes';
import { TestCopilot } from './Account.Test03Copilot';
import { TestProcess } from './Account.Test21Process';
import { TestIFrame } from './Account.Test11IFrame';
import { TestUtility } from './Account.Test27Utility';
import { TestTab } from './Account.Test25Tab';
import { TestTimer } from './Account.Test26Timer';
import { TestKnowledge } from './Account.Test13Knowledge';
import { TestWebApi } from './Account.Test28WebApi';
import { TestWebResource } from './Account.Test29WebResource';

const formAccount_DevKitV4 = (function () {
    "use strict";

    let form: FormAccount_DevKitV4.Form;

    async function onLoad(executionContext: any): Promise<void> {
        form = new FormAccount_DevKitV4.Form(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }

    function registerEvents(): void {
        if (form.ExecutionContext.IsInitialLoad()) {
        }
    }

    // ========================================================================
    // BEGIN ON LOAD
    // ========================================================================

    async function UiAddLoaded(executionContext: any): Promise<void> {
        // BEGIN ON LOAD LOGIC

        // Wait 1 second after OnLoad to allow form to fully load
        // Then clear console and run real tests
        setTimeout(async () => {
            console.clear();

            // Test 0: IControl Interface (base for all controls)
            TestControl(form);

            // Test 1: String Control
            TestString(form);

            // Test 2: Memo Control
            TestMemo(form);

            // Test 3: Boolean Control
            TestBoolean(form);

            // Test 4: Integer Control (Body)
            TestInteger(form);

            // Test 4A: Header Control - Tests header field behavior (using v4_Integer1)
            TestHeader(form);

            // Test 5: Decimal Control
            TestDecimal(form);

            // Test 6: Double Control
            TestDouble(form);

            // Test 7: Money Control
            TestMoney(form);

            // Test 8: Lookup Control
            TestLookup(form);

            // Test 8A: Lookup Control - Multi Control per Attribute (OwnerId has 2 controls: OwnerId, OwnerId1)
            TestLookup1(form);

            // Test 9: OptionSet Control
            TestOptionSet(form);

            // Test 10: MultiOptionSet Control
            TestMultiOptionSet(form);

            // Test 11: DateOnly Control
            TestDateOnly(form);

            // Test 12: DateTime Control
            TestDateTime(form);

            // Test 13: Grid Control
            TestGrid(form);

            // Test 14: QuickView Control
            TestQuickView(form);

            // Test 15: NavigationItem Control
            TestNavigationItem(form);

            // Test 16: ExecutionContext
            TestExecutionContext(form);

            // Test 17: SidePanes
            TestSidePanes(form);

            // Test 18: Copilot (Preview)
            TestCopilot(form);

            // Test 19: Process (BPF)
            TestProcess(form);

            // Test 20: IFrame Control
            TestIFrame(form);

            // Test 21: Utility API
            TestUtility(form);

            // Test 22: Tab Control
            TestTab(form);

            // Test 23: Timer Control
            TestTimer(form);

            // Test 24: Knowledge Control
            TestKnowledge(form);

            // Test 25: WebApi
            await TestWebApi(form);

            // Test 26: WebResource Control
            TestWebResource(form);

        }, 1000);

        // END ON LOAD LOGIC
    }

    // ========================================================================
    // END ON LOAD
    // ========================================================================

    // ========================================================================
    // BEGIN ON CHANGE
    // ========================================================================

    // END ON CHANGE
    // ========================================================================

    // ========================================================================
    // BEGIN PRE SEARCH
    // ========================================================================

    // END PRE SEARCH
    // ========================================================================

    // ========================================================================
    // BEGIN OTHERS
    // ========================================================================

    // END OTHERS
    // ========================================================================

    return {
        OnLoad: onLoad
    };
})();

export default formAccount_DevKitV4;
