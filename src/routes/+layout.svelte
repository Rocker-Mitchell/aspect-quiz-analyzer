<script lang="ts">
	import '@fontsource-variable/encode-sans/wdth.css';
	import '@fontsource-variable/saira/wdth.css';
	import '../app.css';
    import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="grid min-h-full grid-rows-[auto_1fr_auto]">
    <Header />
    
    <main>
        <slot />
    </main>

    <Footer />
</div>
