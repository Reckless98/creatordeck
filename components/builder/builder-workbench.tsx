"use client";

import * as React from "react";
import Link from "next/link";
import { startTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Layers3, RefreshCcw, Share2 } from "lucide-react";
import { useFieldArray, useForm, useWatch, type UseFormReturn } from "react-hook-form";

import { useMediaKit } from "@/components/providers/media-kit-provider";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KitShowcase } from "@/components/kits/kit-showcase";
import {
  builderFormSchema,
  mapFormValuesToKit,
  mapKitToFormValues,
  type BuilderFormValues
} from "@/lib/builder-form";
import { cloneKit, getExampleKitBySlug } from "@/lib/demo-kits";

type NumericFieldName =
  | "totalFollowers"
  | "monthlyViews"
  | "engagementRate"
  | "growthRate"
  | "newsletterSubscribers"
  | `ageBreakdown.${number}.value`
  | `platforms.${number}.followers`
  | `platforms.${number}.engagement`
  | `sponsorPackages.${number}.price`;

export function BuilderWorkbench() {
  const { kit, setKit, resetToExample, exampleOptions } = useMediaKit();
  const [isPending, startUiTransition] = React.useTransition();
  const form = useForm<BuilderFormValues>({
    resolver: zodResolver(builderFormSchema),
    defaultValues: mapKitToFormValues(kit),
    mode: "onChange"
  });

  const ageBreakdownFields = useFieldArray({
    control: form.control,
    name: "ageBreakdown"
  });
  const platformFields = useFieldArray({
    control: form.control,
    name: "platforms"
  });
  const packageFields = useFieldArray({
    control: form.control,
    name: "sponsorPackages"
  });
  const partnerFields = useFieldArray({
    control: form.control,
    name: "partners"
  });
  const testimonialFields = useFieldArray({
    control: form.control,
    name: "testimonials"
  });

  const watchedValues = useWatch({ control: form.control });
  const deferredKit = React.useDeferredValue(kit);
  const syncPreview = React.useEffectEvent((values: BuilderFormValues) => {
    const parsedValues = builderFormSchema.safeParse(values);

    if (!parsedValues.success) {
      return;
    }

    setKit((currentKit) => mapFormValuesToKit(parsedValues.data, currentKit));
  });

  React.useEffect(() => {
    startTransition(() => syncPreview(watchedValues as BuilderFormValues));
  }, [watchedValues]);

  const handleExampleReset = (slug: string) => {
    const nextExample = getExampleKitBySlug(slug);

    if (!nextExample) {
      return;
    }

    const clonedKit = cloneKit(nextExample);

    startUiTransition(() => {
      resetToExample(slug);
      form.reset(mapKitToFormValues(clonedKit));
    });
  };

  return (
    <div className="container space-y-8 py-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="section-kicker">Live editing workspace</p>
          <h1 className="font-display text-5xl font-semibold leading-none text-foreground">
            Build the deck while the preview keeps up.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Update the creator story, audience proof, offers, and brand signals in one place. Local state keeps the current kit flowing across preview, templates, and share mode.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link href="/preview">
              <Eye className="size-4" />
              Preview route
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/share">
              <Share2 className="size-4" />
              Share mode
            </Link>
          </Button>
          <Button asChild>
            <Link href="/templates">
              <Layers3 className="size-4" />
              Swap template
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[460px_minmax(0,1fr)]">
        <Card className="overflow-hidden bg-white/6 xl:h-[calc(100vh-10rem)]">
          <CardHeader className="border-b border-white/10 pb-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <CardTitle>Builder controls</CardTitle>
                <CardDescription>
                  Use the bundled examples as a fast starting point, then fine-tune the current deck.
                </CardDescription>
              </div>
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <Select onValueChange={handleExampleReset} defaultValue={kit.slug}>
                  <SelectTrigger>
                    <SelectValue placeholder="Load an example kit" />
                  </SelectTrigger>
                  <SelectContent>
                    {exampleOptions.map((option) => (
                      <SelectItem key={option.slug} value={option.slug}>
                        {option.creatorName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="secondary"
                  onClick={() => handleExampleReset(kit.slug)}
                  disabled={isPending}
                >
                  <RefreshCcw className="size-4" />
                  Reset
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-18rem)] xl:h-[calc(100vh-16.25rem)]">
              <div className="p-6">
                <Form {...form}>
                  <form className="space-y-6">
                    <Tabs defaultValue="profile">
                      <TabsList className="grid h-auto w-full grid-cols-4 rounded-[24px]">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="audience">Audience</TabsTrigger>
                        <TabsTrigger value="offers">Offers</TabsTrigger>
                        <TabsTrigger value="social">Social</TabsTrigger>
                      </TabsList>

                      <TabsContent value="profile" className="space-y-5">
                        <FormField
                          control={form.control}
                          name="template"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Template</FormLabel>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a template" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="aurora">Aurora Pulse</SelectItem>
                                  <SelectItem value="obsidian">Obsidian Stage</SelectItem>
                                  <SelectItem value="editorial">Editorial Silk</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                This updates the global deck styling and flows into Preview and Share mode.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="creatorName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Creator name</FormLabel>
                              <FormControl>
                                <Input placeholder="Maya Vale" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="handle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Handle</FormLabel>
                                <FormControl>
                                  <Input placeholder="@creatorname" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                  <Input placeholder="London + remote" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="niche"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Niche</FormLabel>
                              <FormControl>
                                <Input placeholder="Creator niche" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="headline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Headline</FormLabel>
                              <FormControl>
                                <Textarea className="min-h-[96px]" {...field} />
                              </FormControl>
                              <FormDescription>
                                This is the first sponsor-facing line in the hero area.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bio</FormLabel>
                              <FormControl>
                                <Textarea className="min-h-[140px]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="callToAction"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Commercial CTA</FormLabel>
                              <FormControl>
                                <Textarea className="min-h-[96px]" {...field} />
                              </FormControl>
                              <FormDescription>
                                Use this like the sponsor-friendly close inside your media kit.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TabsContent>

                      <TabsContent value="audience" className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <NumericField form={form} name="totalFollowers" label="Total followers" />
                          <NumericField form={form} name="monthlyViews" label="Monthly views" />
                          <NumericField form={form} name="engagementRate" label="Engagement %" step="0.1" />
                          <NumericField form={form} name="growthRate" label="Growth %" />
                          <NumericField form={form} name="newsletterSubscribers" label="Newsletter subs" />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="section-kicker">Top countries</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              These show up as the sponsor fit quick-scan list.
                            </p>
                          </div>
                          <div className="grid gap-4 md:grid-cols-3">
                            {[0, 1, 2].map((index) => (
                              <FormField
                                key={`country-${index}`}
                                control={form.control}
                                name={`topCountries.${index}`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Country {index + 1}</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="section-kicker">Age breakdown</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Keep totals realistic. The bar chart updates live on the right.
                            </p>
                          </div>
                          <div className="grid gap-4">
                            {ageBreakdownFields.fields.map((field, index) => (
                              <div key={field.id} className="grid gap-4 md:grid-cols-[1fr_120px]">
                                <FormField
                                  control={form.control}
                                  name={`ageBreakdown.${index}.label`}
                                  render={({ field: labelField }) => (
                                    <FormItem>
                                      <FormLabel>Age label</FormLabel>
                                      <FormControl>
                                        <Input {...labelField} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <NumericField form={form} name={`ageBreakdown.${index}.value`} label="Percent" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="section-kicker">Platform mix</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Focus on the three channels you actually sell with.
                            </p>
                          </div>
                          <div className="grid gap-4">
                            {platformFields.fields.map((field, index) => (
                              <div key={field.id} className="rounded-[24px] border border-white/10 bg-black/10 p-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                  <FormField
                                    control={form.control}
                                    name={`platforms.${index}.name`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Platform</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <NumericField
                                    form={form}
                                    name={`platforms.${index}.followers`}
                                    label="Followers"
                                  />
                                  <NumericField
                                    form={form}
                                    name={`platforms.${index}.engagement`}
                                    label="Engagement %"
                                    step="0.1"
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`platforms.${index}.highlight`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Signature content</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="offers" className="space-y-4">
                        {packageFields.fields.map((field, index) => (
                          <div key={field.id} className="rounded-[28px] border border-white/10 bg-black/10 p-5">
                            <div className="mb-4 flex items-center justify-between gap-4">
                              <div>
                                <p className="section-kicker">Package {index + 1}</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                  Featured packages get the visual emphasis in preview mode.
                                </p>
                              </div>
                              <FormField
                                control={form.control}
                                name={`sponsorPackages.${index}.featured`}
                                render={({ field: checkboxField }) => (
                                  <FormItem className="flex items-center gap-3 space-y-0">
                                    <input
                                      checked={checkboxField.value}
                                      onChange={checkboxField.onChange}
                                      type="checkbox"
                                      className="size-4 rounded border-white/20 bg-white/5 accent-violet-500"
                                    />
                                    <FormLabel className="tracking-[0.16em]">Featured</FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name={`sponsorPackages.${index}.name`}
                                render={({ field: inputField }) => (
                                  <FormItem>
                                    <FormLabel>Package name</FormLabel>
                                    <FormControl>
                                      <Input {...inputField} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <NumericField
                                form={form}
                                name={`sponsorPackages.${index}.price`}
                                label="Price (USD)"
                              />
                              <FormField
                                control={form.control}
                                name={`sponsorPackages.${index}.turnaround`}
                                render={({ field: inputField }) => (
                                  <FormItem>
                                    <FormLabel>Turnaround</FormLabel>
                                    <FormControl>
                                      <Input {...inputField} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`sponsorPackages.${index}.description`}
                                render={({ field: inputField }) => (
                                  <FormItem className="md:col-span-2">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                      <Textarea className="min-h-[90px]" {...inputField} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`sponsorPackages.${index}.deliverablesText`}
                                render={({ field: inputField }) => (
                                  <FormItem className="md:col-span-2">
                                    <FormLabel>Deliverables</FormLabel>
                                    <FormControl>
                                      <Textarea className="min-h-[120px]" {...inputField} />
                                    </FormControl>
                                    <FormDescription>
                                      One deliverable per line. The preview card turns each line into a checklist item.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="social" className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <p className="section-kicker">Partner logos</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              These appear as text-first logo placeholders for a clean premium deck.
                            </p>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            {partnerFields.fields.map((field, index) => (
                              <div key={field.id} className="rounded-[24px] border border-white/10 bg-black/10 p-4">
                                <div className="grid gap-4">
                                  <FormField
                                    control={form.control}
                                    name={`partners.${index}.name`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Partner name</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`partners.${index}.label`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Label</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="section-kicker">Testimonials</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Short, concrete quotes convert better than fluffy praise. Keep them brand-friendly.
                            </p>
                          </div>
                          <div className="grid gap-4">
                            {testimonialFields.fields.map((field, index) => (
                              <div key={field.id} className="rounded-[24px] border border-white/10 bg-black/10 p-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                  <FormField
                                    control={form.control}
                                    name={`testimonials.${index}.name`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`testimonials.${index}.company`}
                                    render={({ field: inputField }) => (
                                      <FormItem>
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`testimonials.${index}.role`}
                                    render={({ field: inputField }) => (
                                      <FormItem className="md:col-span-2">
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                          <Input {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`testimonials.${index}.quote`}
                                    render={({ field: inputField }) => (
                                      <FormItem className="md:col-span-2">
                                        <FormLabel>Quote</FormLabel>
                                        <FormControl>
                                          <Textarea className="min-h-[130px]" {...inputField} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </form>
                </Form>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="space-y-4 xl:sticky xl:top-28 xl:h-fit">
          <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/6 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Live preview</p>
              <p className="mt-1 text-sm text-foreground">
                {isPending ? "Syncing deck changes..." : "Builder changes are flowing into the active kit."}
              </p>
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {deferredKit.template}
            </div>
          </div>
          <KitShowcase kit={deferredKit} />
        </div>
      </div>
    </div>
  );
}

function NumericField({
  form,
  name,
  label,
  step
}: {
  form: UseFormReturn<BuilderFormValues>;
  name: NumericFieldName;
  label: string;
  step?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="number"
              step={step}
              value={typeof field.value === "number" ? field.value : ""}
              onChange={(event) => field.onChange(Number(event.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
