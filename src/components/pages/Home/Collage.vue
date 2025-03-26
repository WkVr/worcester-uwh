<script setup>
import Design1 from '@assets/design_1.png';
import Design2 from '@assets/design_2.png';
import Design3 from '@assets/design_3.png';
import Design4 from '@assets/design_4.png';
import Design5 from '@assets/design_5.png';
import Design6 from '@assets/design_6.png';
import Design7 from '@assets/design_7.png';
import Design8 from '@assets/design_8.png';
import CollageItem from './CollageItem.vue';
</script>

<template>
	<div class="flex flex-row gap-4 justify-between items-center">
		<div>
			<CollageItem :imageUrl="Design1" width="w-24" height="h-24" />
		</div>
		<div class="flex flex-col gap-4">
			<CollageItem :imageUrl="Design2" width="w-24" height="h-24" />
			<CollageItem :imageUrl="Design3" width="w-24" height="h-24" />
		</div>
		<div>
			<CollageItem :imageUrl="Design4" width="w-64" height="h-64" />
		</div>
		<div class="flex flex-col gap-4">
			<CollageItem :imageUrl="Design5" width="w-24" height="h-24" />
			<CollageItem :imageUrl="Design6" width="w-24" height="h-24" />
		</div>
		<div>
			<CollageItem :imageUrl="Design7" width="w-24" height="h-24" />
		</div>
	</div>
</template>
