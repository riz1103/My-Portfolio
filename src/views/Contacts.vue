<template>
    <div>
        <modal v-if="classicModal" @close="classicModalHide">
          <template slot="header">
            <h4 class="modal-title">Contact Information</h4>
            <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
              <md-icon>clear</md-icon>
            </md-button>
          </template>

          <template slot="body">
            <p>Mobile Number: 09394006408</p>
            <p>Landline Number: (049) 85239504</p>
            <p>Email Address: joserizc@gmail.com</p>
          </template>

          <template slot="footer">
            <md-button class="md-simple">I will Contact You!</md-button>
            <md-button class="md-danger md-simple" @click="$emit('hideContacts')">Close</md-button>
          </template>
        </modal>
    </div>
</template>
<script>
import {Modal} from '@/components'
export default {
    name:'Contacts',
    components:[
        Modal
    ],
    
}
</script>