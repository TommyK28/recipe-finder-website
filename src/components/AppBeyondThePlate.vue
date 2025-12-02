<script setup></script>
<template>
    <section class="beyond-the-plate">
        <div class="container container__layout">
            <div class="beyond-the-plate__row">
                <div class="beyond-the-plate__content">
                    <h3 class="beyond-the-plate__title">Beyond the plate</h3>
                    <p class="beyond-the-plate__text">
                        We believe food is a catalyst for community and well-being. By sharing
                        approachable recipes, we hope to:
                    </p>

                    <ul class="beyond-the-plate__list">
                        <li class="beyond-the-plate__list-item">
                            Encourage family dinners and social cooking.
                        </li>
                        <li class="beyond-the-plate__list-item">
                            Reduce reliance on single-use packaging and delivery waste.
                        </li>
                        <li class="beyond-the-plate__list-item">
                            Spark curiosity about seasonal produce and local agriculture.
                        </li>
                    </ul>
                </div>

                <picture>
                    <source media="(min-width: 960px)" srcset="/images/beyond-the-plate-des.png" />
                    <source media="(min-width: 576px)" srcset="/images/beyond-the-plate-tab.png" />
                    <img
                        class="beyond-the-plate__img"
                        src="/images/beyond-the-plate-mob.png"
                        alt=""
                    />
                </picture>
            </div>
        </div>
    </section>
</template>
