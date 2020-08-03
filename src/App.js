import React, { Suspense } from 'react';
import Meals from './components/Meals';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <Suspense fallback="">
      <Header title="See what we're serving up next week"/>
      <main>
        <section className="description">
          <h3>Nutrition is on the menu</h3>
          <p>Our meals are designed by nutritionists and crafted by local chefs. Free of gluten, refined sugars or dairy* and responsibly sourced.</p>
          <p className="finePrint">*Meals are crafted in kitchens where gluten, dairy, and other allergens are present, and thus are not certified gluten-free, dairy or other allergen-free.</p>
        </section>
        <Meals/>
      </main>
      <Footer name={'Territory Foods'}/>
    </Suspense>
  );
}
