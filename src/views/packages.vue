<script>
import {
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    YoutubeIcon,
    GitlabIcon,
    MailIcon,
    UserPlusIcon,
    UsersIcon,
    MessageCircleIcon,
    BellIcon,
    ToolIcon,
    PhoneIcon,
    BookmarkIcon,
    ItalicIcon,
    GlobeIcon,
    GiftIcon,
    MapPinIcon,
    CodeIcon,
    HelpCircleIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Account-profile component

 */
//let packages = ['aa'];
export default {
    
    data() {
        fetch('http://eclat.netgroup.uniroma2.it:3000/v1/package')
        .then(response => response.json())
        .then(data => {
            this.packages = this.display_packages = data.data; 
            this.packages.forEach((p) => this.programs_n += Object.keys(p.programs || {}).length);
        });
        return {packages: [], display_packages: [], programs_n: 0, search_string: ""};
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        FacebookIcon,
        InstagramIcon,
        TwitterIcon,
        LinkedinIcon,
        GithubIcon,
        YoutubeIcon,
        GitlabIcon,
        MailIcon,
        UserPlusIcon,
        UsersIcon,
        MessageCircleIcon,
        BellIcon,
        ToolIcon,
        PhoneIcon,
        BookmarkIcon,
        ItalicIcon,
        GlobeIcon,
        GiftIcon,
        MapPinIcon,
        HelpCircleIcon,
        CodeIcon
    },
    methods: {
        search: (packages, q) => {
            if(!q) 
                return packages;
            else 
                return packages.filter((el)=>el.name.indexOf(q) >= 0);
        }
    }
}


</script>

<template>
<div>
    <Navbar :nav-light="false" />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title"> There are {{ packages.length }} packages and {{ programs_n }} programs available <br> Search what you need </h4>

                        <div class="subcribe-form mt-4 pt-2">
                            <form>
                                <div class="form-group mb-0">
                                    <input type="text" id="help" name="name" class="border bg-white rounded-pill shadow" required="" placeholder="Search a program" v-model="search_string">
                                    <button type="submit" class="btn btn-pills btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <section v-for="p in search(packages, search_string)">
        <!-- Hero Start -->
        <section class="bg-profile d-table w-100 bg-primary" style="background: url('images/account/bg.png') center center;">
            <div class="container">
                <div class="row">
                    <!-- ol>
                        <li v-for="package in data">
                        {{ package |json }}
                        </li>
                    </ol -->
                    <div class="col-lg-12">
                        <div class="card public-profile border-0 rounded shadow" style="z-index: 1;">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-lg-2 col-md-3 text-md-left text-center">
                                        <img src="images/icon.png" class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="">
                                    </div>
                                    <!--end col-->

                                    <div class="col-lg-10 col-md-9">
                                        <div class="row align-items-end">
                                            <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                                                <h3 class="title mb-0">{{ p.name }}</h3>
                                                <small class="text-muted h6 mr-2">{{ p.description }}</small>
                                                <ul class="list-inline mb-0 mt-3">
                                                    <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted" title="Instagram">
                                                            <code-icon class="fea icon-sm mr-2"></code-icon>
                                                            <span v-for="(element, index) in p.authors">
                                                                <span v-if="index != 0">, </span><span>{{ element }}</span>
                                                            </span>
                                                        </a></li>
                                                </ul>
                                            </div>
                                            <!--end col-->
                                            <div class="col-md-5 text-md-right text-center">
                                                <ul class="list-unstyled social-icon social mb-0 mt-4">
                                                    <li class="list-inline-item"><a v-bind:href="p.documentation" class="rounded" v-b-tooltip.hover title="Documentation">
                                                            <help-circle-icon class="fea icon-sm fea-social"></help-circle-icon>
                                                        </a></li>
                                                    <li class="list-inline-item ml-1"><a v-bind:href="p.git_url" class="rounded" v-b-tooltip.hover title="Git">
                                                            <github-icon class="fea icon-sm fea-social"></github-icon>
                                                        </a></li>
                                                </ul>
                                                <!--end icon-->
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end row-->
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--ed container-->
        </section>
        <!--end section-->
        <!-- Hero End -->

        <!-- Profile Start -->
        <section class="section mt-60">
            <div class="container mt-lg-3">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                        <div class="sidebar sticky-bar p-4 rounded shadow">
                            <div class="widget">
                                <h5 class="widget-title">Popularity :</h5>
                                <div class="row mt-4">
                                    <div class="col-6 text-center">
                                        <user-plus-icon class="fea icon-ex-md text-primary mb-1"></user-plus-icon>
                                        <h5 class="mb-0">{{p.views}}</h5>
                                        <p class="text-muted mb-0">Views</p>
                                    </div>
                                    <!--end col-->

                                    <div class="col-6 text-center">
                                        <users-icon class="fea icon-ex-md text-primary mb-1"></users-icon>
                                        <h5 class="mb-0">{{p.downloads}}</h5>
                                        <p class="text-muted mb-0">Downloads</p>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>

                            <div class="widget mt-4 pt-2">
                                <h5 class="widget-title">Mantainer :</h5>
                                <div class="progress-box mt-4">
                                    <span class="title text-muted">{{ p.maintainer_name }} <a href="javascript:void(0)" class="rounded">
                                            <a v-bind:href="'mailto:' + p.maintainer_email"><mail-icon class="fea icon-sm fea-social"></mail-icon></a>
                                        </a></span>
                                </div>
                                <!--end process box-->
                            </div>

                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-8 col-12">
                        <div class="border-bottom pb-4">
                            <h5>Import the package in your eCLAT script</h5>
                            <p class="text-muted mb-0">from programs.{{p.name}} import PROGRAM-NAME-HERE</p>
                        </div>

                        <div class="border-bottom pb-4">
                            <div class="row">
                               

                                <div class="col-md-12 mt-4 pt-2 pt-sm-0">
                                    <h5>Programs :</h5>

                                    <div class="media key-feature align-items-center p-3 rounded shadow mt-4" v-for="(prog_desc, prog_name) in p.programs">
                                        <img src="images/job/Circleci.svg" class="avatar avatar-ex-sm" alt="">
                                        <div class="media-body content ml-3">
                                            <h4 class="title mb-0">{{prog_name}}</h4>
                                            <p class="text-muted mb-0">{{prog_desc}}</p>
                                            <!-- p class="text-muted mb-0"><a href="javascript:void(0)" class="text-primary">CircleCi</a> @London, UK</p -->
                                        </div>
                                    </div>

                                    
                                </div>
                                <!--end col-->
                            </div>
                            <!--end row-->
                        </div>

                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->
        <!-- Profile End -->
        <!--end section-->
    </section>


    <Footer />
    <!-- Footer End -->
    <!-- Back to top -->
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
</div>
</template>
