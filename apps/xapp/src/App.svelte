<script lang="ts">
  import { onMount } from 'svelte'  
  import { XappWrapper } from '@xapplaxy/xy-ui'
  import CalculatorContainer from './lib/CalculatorContainer.svelte';
  const aa = atob("eGFwcGxheHkuY29t");
  const bb = atob("bWFwcGNlbGxz");
  const appId = import.meta.env.VITE_XAPP_KEY;
 
  onMount(async () => {
    const node = document.createElement("a");
    const textnode = document.createTextNode(aa);
    node.setAttribute("href",window.location.href);
    node.appendChild(textnode);
    document.getElementById(bb)?.appendChild(node);
  })
</script>

<XappWrapper>
          <CalculatorContainer appId={appId}></CalculatorContainer>   
</XappWrapper>