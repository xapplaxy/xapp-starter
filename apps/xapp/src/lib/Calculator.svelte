<script lang="ts">
	import {
		XyLabel,
		XySelect,
    XyButton,XyAccordion,XyAccordionItem,
    XyAccordionContent,XyTooltip,
    XyDatePicker,XyCheckbox,XySlider,
    XyCard,XyCheckboxGroup,XyToggle,XyRadioGroup,XyRadioItem    
	} from '@xapplaxy/xy-ui';
  import { copyToClipboard } from './utils';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'cherry1', label: 'Cherry1' },
		{ value: 'cherry2', label: 'Cherry2' },
		{ value: 'cherry3', label: 'Cherry3' },
		{ value: 'cherry4', label: 'Cherry4' },
		{ value: 'cherry5', label: 'Cherry5' },
		{ value: 'cherry6', label: 'Cherry6' },
		{ value: 'cherry7', label: 'Cherry7' },
	];

	const chkItems = [
		{ key: 'apple', label: 'Apple' },
		{ key: 'banana', label: 'Banana' },
		{ key: 'cherry', label: 'Cherry' }
	];
	let fruit = $state<string>('apple');
	let chkgrp = $state<string[]>(['apple']);
	let radiogrp = $state<string>('');
	let toggle = $state<"Y"|"N">('N')
	let dateValue = $state<DateValue>()
</script>

<div class="xa-calculator-container">  
  <div class="xy-form">
    <div class="xy-form-control">
      <XyButton>Unlimited</XyButton>
      <a class="link" href="/test">Unlimited</a>
    </div>
    <div class="xy-form-control">
      <XyAccordion class="w-full" type="single" value={"test"}>
        <XyAccordionItem class="group shadow-md rounded-t mb-0.5" activeClasses="bg-green-500" title="test" value={"test"}>
          <XyAccordionContent class="p-1" duration={200}>
            <p>Test is always test</p>
          </XyAccordionContent>
        </XyAccordionItem>
        <XyAccordionItem class="group shadow-md rounded-t mb-0.5" title="test1" value={"test1"}>
          <XyAccordionContent class="p-1" duration={200}>
            <p>Test is always test</p>
          </XyAccordionContent>
        </XyAccordionItem>
      </XyAccordion>
    </div>
    <div class="flex w-full">
    <div class="grid grid-cols-2 gap-4">
        <XySelect type="single" {items} bind:value={fruit}></XySelect>
        <XySelect type="single" {items} bind:value={fruit}></XySelect>
    </div>
    </div>
    
    <div class="xy-form-control">
      <XySelect type="single" {items} bind:value={fruit}></XySelect>
      <XyTooltip value="Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf Testme jdkjkdjv jkjkjdkfkdj kjskdjkfsjkjd kjkjsdkjfksjkj kjkjf jkjkjfs jkjkjf">
        {#snippet trigger()}
          <XyLabel>Test</XyLabel>
        {/snippet}
      </XyTooltip>
    </div>
    <div class="xy-form-control">
      <XyDatePicker calendarLabel="Birthday" bind:value={dateValue} weekdayFormat="short" fixedWeeks={true} ></XyDatePicker>
      {dateValue}
    </div>
    <div class="xy-form-control">
      <input type="text" class="xy-input" />
    </div>
    <div class="xy-form-control xy-form-element-small-max-width">
      <input type="text" class="xy-input" />
    </div>
    <div class="xy-form-control">
      <XyCheckbox id="test" name="test" indeterminate={true} checked={false}>
        <XyLabel for="test">Test</XyLabel>
      </XyCheckbox>
    </div>
    <div class="xy-form-control">
      <XySlider value={10} type="single"></XySlider>
    </div>
    <div class="xy-form-control">
      <XyCheckboxGroup items={chkItems} bind:value={chkgrp}></XyCheckboxGroup>
      {chkgrp}
    </div>
    <div class="xy-form-control">
      <XyToggle bind:value={toggle}></XyToggle>												
    </div>
    <div class="xy-form-control">
      <XyRadioGroup bind:value={radiogrp}>
        <XyRadioItem id="test" value="test" label="Test"></XyRadioItem>
        <XyRadioItem id="tes1" value="test1" label="Test1"></XyRadioItem>
      </XyRadioGroup>
    </div>
    <XyCard>
      {#snippet header()}
        <div>Header</div>
      {/snippet}
      <div>Just a test</div>
    </XyCard>
  </div>	
</div>