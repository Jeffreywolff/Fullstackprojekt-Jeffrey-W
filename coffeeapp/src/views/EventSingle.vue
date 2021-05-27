<template>
  
</template>

<!-- client/src/views/EventSingle.vue -->
<script>
import EventCard from "@/components/EventCard";
import EventService from '@/services/EventService.js'; // NEW
export default {
  name: "EventsList",
  components: {
    EventCard
  },
  data() {
    return {
      event: {},
      events: []
    };
  },
  created() {
    this.getEventsData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getEventsData() {
      // NEW - Use the eventService to call the getEvents() method
      EventService.getEvents()
      .then(
        (events => {
          this.$set(this, "events", events);
        }).bind(this)
      );
    }
  }
};
</script>

<style>

</style>