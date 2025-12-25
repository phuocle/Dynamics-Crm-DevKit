import { FormAccount_DevKitV4 } from './generator/Account.form';
import { TestControl } from './Account.TestControl';
import { TestString } from './Account.TestString';
import { TestMemo } from './Account.TestMemo';
import { TestBoolean } from './Account.TestBoolean';
import { TestInteger } from './Account.TestInteger';
import { TestHeader } from './Account.TestHeader';
import { TestDecimal } from './Account.TestDecimal';
import { TestDouble } from './Account.TestDouble';
import { TestMoney } from './Account.TestMoney';
import { TestLookup } from './Account.TestLookup';
import { TestLookup1 } from './Account.TestLookup1';
import { TestOptionSet } from './Account.TestOptionSet';
import { TestMultiOptionSet } from './Account.TestMultiOptionSet';
import { TestDateOnly } from './Account.TestDateOnly';
import { TestDateTime } from './Account.TestDateTime';
import { TestGrid } from './Account.TestGrid';
import { TestQuickView } from './Account.TestQuickView';
import { TestNavigationItem } from './Account.TestNavigationItem';
import { TestExecutionContext } from './Account.TestExecutionContext';
import { TestSidePanes } from './Account.TestSidePanes';
import { TestCopilot } from './Account.TestCopilot';
import { TestProcess } from './Account.TestProcess';
import { TestIFrame } from './Account.TestIFrame';
import { TestUtility } from './Account.TestUtility';
import { TestTab } from './Account.TestTab';
import { TestTimer } from './Account.TestTimer';
import { TestKnowledge } from './Account.TestKnowledge';
import { TestWebApi } from './Account.TestWebApi';
import { TestWebResource } from './Account.TestWebResource';

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
