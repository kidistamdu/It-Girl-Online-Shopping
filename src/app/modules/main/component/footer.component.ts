import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  template: `
    <div class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md">
          <strong
            class="block text-center text-xl font-bold text-gray-900 sm:text-3xl"
          >
            Want us to email you when new products arrive?
          </strong>

          <form class="mt-6">
            <div class="relative max-w-lg">
              <label class="sr-only" for="email"> Email </label>
              <input
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="ItGirlOnlineShopping@gmail.com"
              />
              <button
                class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div class="mx-auto max-w-sm lg:max-w-none">
            <div class="mt-6 flex justify-center gap-4 lg:justify-start">
              @for ( link of socialLinks; track $index){
              <a
                [href]="link.href"
                target="_blank"
                rel="noreferrer"
                class="text-gray-700 transition hover:text-gray-700/75"
              >
                <span class="sr-only">{{ link.label }}</span>
                <i
                  class="cursor-pointer items-center {{ link.icon }}"
                  aria-hidden="true"
                ></i>
              </a>
              }
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8">
          <p class="text-center text-xs/relaxed text-gray-500">
            © It Girl Online Shopping 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `,
  imports: [NgFor, NgIf],
  providers: [],
})
export class FooterComponent implements OnInit {
  constructor() {}
  socialLinks = [
    {
      href: '#',
      label: 'Telegram',
      icon: 'fa fa-telegram',
    },
    {
      href: '',
      label: 'TikTok',
      icon: 'fa fa-telegram',
    },
    // Add other social links here
  ];

  sections = [
    {
      title: 'Services',
      items: [
        { href: '#', label: 'Marketing' },
        { href: '#', label: 'Graphic Design' },
        { href: '#', label: 'App Development' },
        { href: '#', label: 'Web Development' },
      ],
    },
    {
      title: 'About',
      items: [
        { href: '#', label: 'About' },
        { href: '#', label: 'Careers' },
        { href: '#', label: 'History' },
        { href: '#', label: 'Our Team' },
      ],
    },
    {
      title: 'Support',
      items: [
        { href: '#', label: 'FAQs' },
        { href: '#', label: 'Contact' },
        { href: '#', label: 'Live Chat' },
      ],
    },
  ];
  ngOnInit() {}
}
