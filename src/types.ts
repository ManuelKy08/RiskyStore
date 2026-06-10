/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: number;
  name: string;
  price: number;
  priceStr: string;
  originalPriceStr?: string;
  discount?: number;
  category: string;
  badge?: string;
  description: string;
  images: string[];
  fallbacks: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  stars: number;
  quote: string;
  avatar: string;
  productBadge: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
