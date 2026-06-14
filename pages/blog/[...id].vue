<template>
  <div id="primary" class="content-area">
    <div id="title" class="page-title">
      <div class="section-container">
        <div class="content-title-heading">
          <h1 class="text-title-heading">
            {{ title }}
          </h1>
        </div>
        <div class="breadcrumbs">
          <Breadcrumb :breadcrumbItems="breadcrumbItems" />
        </div>
      </div>
    </div>
    <div id="content" class="site-content" role="main">
      <div class="section-padding">
        <div class="section-container p-l-r">
          <div class="row">
            <div v-if="sidebar == 'left'" class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
              <!-- Block Blog Search -->
              <ModuleBlogSearch />

              <!-- Block Blog Categories -->
              <ModuleBlogCat title="Categories" :limit="10" />

              <!-- Block Blog -->
              <ModuleBlog title="Recent Posts" :limit="3" />

              <!-- Block Blog Tags -->
              <ModuleBlogTag title="Tags" />
            </div>

            <div :class="sidebar == 'none' ? 'col-xl-12 col-lg-12 col-md-12 col-12' : 'col-xl-9 col-lg-9 col-md-12 col-12'">
              <div class="post-details">
                <div class="post-image">
                  <img v-if="blog.image" :src="blog.image" :alt="blog.title">
                </div>
                <h2 class="post-title">
                  {{ blog.title }}
                </h2>
                <div class="post-meta">
                  <span class="post-categories"><i class="icon_folder-alt"></i> <NuxtLink :to="{ path: '/blogs', query: { cat: category.id } }">{{ category.title }}</NuxtLink></span>
                  <span class="post-time"><i class="icon_clock_alt"></i> {{ blog.date }}</span>
                  <span class="post-comment"><i class="icon_comment_alt"></i> {{ blog.comments.length }} Comments</span>
                </div>
                <div class="post-content clearfix" v-html="blog.content">
                </div>
                <div class="post-content-entry">
                  <div class="tags-links">
                    <label>Tags :</label> 
                    <NuxtLink v-for="(tag, index) in blog.tags" :key="index" to="/blogs" rel="tag">
                      {{ tag }}
                    </NuxtLink>
                  </div>
                  <div class="entry-social-share">
                    <label>Share :</label>
                    <div class="social-share">
                      <NuxtLink to="#" target="_blank" class="share-facebook"><i class="fa fa-facebook"></i>Facebook</NuxtLink>
                      <NuxtLink to="#" target="_blank" class="share-twitter"><i class="fa fa-twitter"></i>Twitter</NuxtLink>
                      <NuxtLink to="#" target="_blank" class="share-pinterest"><i class="fa fa-pinterest"></i>Pinterest</NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="prev-next-post">
                  <div class="previous-post">
                    <NuxtLink :to="'/blog/' + previousItem.id" rel="prev">
                      <div class="hover-extend active"><span>Previous</span></div>
                      <h2 class="title">{{ previousItem.title }}</h2>
                    </NuxtLink>
                  </div>
                  <div class="next-post">
                    <NuxtLink :to="'/blog/' + nextItem.id" rel="next">
                      <div class="hover-extend active"><span>Next</span></div>
                      <h2 class="title">{{ nextItem.title }}</h2>
                    </NuxtLink>
                  </div>
                </div>
                <div id="comments" class="comments-area">
                  <h3 class="comments-title">{{ blog.comments.length }} Comments</h3>
                  <div class="comments-list">
                    <div v-for="(comment, index) in blog.comments" :key="index" class="comment-item">
                      <div class="comment-avatar">
                        <img src="/img/user.jpg" class="avatar" height="70" width="70" alt="">
                      </div>
                      <div class="comment-content-wrap">
                        <div class="comment-author">
                          {{ comment.name }}
                        </div>
                        <div class="comment-time">
                          {{ comment.date }}
                        </div>
                        <div class="comment-content">
                          <p>{{ comment.content }}</p>
                        </div>
                        <a class="comment-reply-link" href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                  <div class="comment-form">  
                    <div class="form-header">
                      <h3>Leave a Reply</h3>
                    </div>
                    <form @submit.prevent="handleSubmit" novalidate="true" class="row">
                      <div class="comment-notes col-md-12 col-sm-12">Your email address will not be published.</div>
                      <div class="form-group col-md-12 col-sm-12">
                        <textarea name="comment" v-model="form.comment" :class="['form-control', { 'is-invalid': checkForm && $v.form.comment.$error }]" cols="45" rows="8" placeholder="Comment *"></textarea>
                         <div v-if="$v.form.comment.required.$invalid" class="invalid-feedback">Content is required</div>
                      </div>
                      <div class="form-group col-md-6 col-sm-6">
                        <input type="text" name="name" v-model="form.name" :class="['form-control', { 'is-invalid': checkForm && $v.form.name.$error }]" size="30" placeholder="Your Name *">
                        <div v-if="$v.form.name.required.$invalid" class="invalid-feedback">Name is required</div>
                      </div>
                      <div class="form-group col-md-6 col-sm-6">
                        <input type="text" name="email" v-model="form.email" :class="['form-control', { 'is-invalid': checkForm && $v.form.email.$error }]" size="30" placeholder="Your Email *">
                        <div v-if="$v.form.email.required.$invalid" class="invalid-feedback">Email is required</div>
                        <div v-if="$v.form.email.email.$invalid" class="invalid-feedback">Email is invalid</div>
                      </div>
                      <div class="form-group col-md-12">
                        <input name="submit" type="submit" id="submit" class="btn button-outline" value="Post Comment">
                      </div> 
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="sidebar == 'right'" class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar right-sidebar md-b-50">
              <!-- Block Blog Search -->
              <ModuleBlogSearch />

              <!-- Block Blog Categories -->
              <ModuleBlogCat title="Categories" :limit="10" />

              <!-- Block Blog -->
              <ModuleBlog title="Recent Posts" :limit="3" />

              <!-- Block Blog Tags -->
              <ModuleBlogTag title="Tags" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useBlogStore } from '~/stores/blog'

const title = 'Blog Single';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Blogs', to: '/blogs' },
  { text: 'Blog Single', active: true }
]

// Computed props
const view = computed(() => route.query.view || 'grid')
const sidebar = computed(() => route.query.sidebar || 'left')

const route = useRoute()
const router = useRouter()

// Stores
const blogStore = useBlogStore()

// State
const quantity = ref(1)

// Computed
const blog = computed(() => blogStore.getBlogById(route.params.id as string))
const category = computed(() => blogStore.getCategoryById(blog.value?.category))

const previousItem = computed(() => {
  const items = blogStore.items
  const index = items.indexOf(blog.value)
  
  if (index === -1) return null
  
  return index === 0 ? items[items.length - 1] : items[index - 1]
})

const nextItem = computed(() => {
  const items = blogStore.items
  const index = items.indexOf(blog.value)
  
  if (index === -1) return null
  
  return index === items.length - 1 ? items[0] : items[index + 1]
})

// Validate form
const checkForm = ref(false);
const form = reactive({ 
  comment: '', 
  name: '', 
  email: '' 
});
const rules = {
  form: { 
    comment: { required }, 
    name: { required }, 
    email: { required, email } 
  }
};
const $v = useVuelidate(rules, { form });

const handleSubmit = async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;

    $v.value.form.$touch(); 
    
    checkForm.value = true; 
    
    const isFormCorrect = await $v.value.form.$validate();
    if (!isFormCorrect) {
      console.log("Form invalid:", $v.value.form.$errors);
      return;
    }

    alert('Thank you for the review!')
  }
};

definePageMeta({
  currentMenu: 'blog'
})

useHead({
  bodyAttrs: {
    class: 'blog-single'
  }
})
</script>